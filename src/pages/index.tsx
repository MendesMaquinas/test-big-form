import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SpinnerFrom from "@/components/template/inputs/SpinnerForm";
import Spinner from "@/components/template/inputs/Spinner";
import { emitWarning } from "process";

export default function Home() {
  const { data: requests, isLoading: isLoadingRequests } = useQuery({
    queryKey: ["requests_data"],
    queryFn: () =>
      fetch("https://apirequestfields-production.up.railway.app/requests").then(
        (res) => res.json()
      ),
  });

  const { data: clients, isLoading: isLoadingClients } = useQuery({
    queryKey: ["clients_data"],
    queryFn: () =>
      fetch(
        "https://apirequestfields-production.up.railway.app/clients/actives"
      ).then((res) => res.json()),
  });

  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects_data"],
    queryFn: () =>
      fetch(`https://apirequestfields-production.up.railway.app/projects`).then(
        (res) => res.json()
      ),
  });

  const { data: lines, isLoading: isLoadingLines } = useQuery({
    queryKey: ["lines_data"],
    queryFn: () =>
      fetch(`https://apirequestfields-production.up.railway.app/lines`).then(
        (res) => res.json()
      ),
  });

  const { data: equipaments, isLoading: isLoadingEquipaments } = useQuery({
    queryKey: ["equipaments_data"],
    queryFn: () =>
      fetch(
        `https://apirequestfields-production.up.railway.app/equipaments`
      ).then((res) => res.json()),
  });

  const { data: reasons, isLoading: isLoadingReasons } = useQuery({
    queryKey: ["reasons_data"],
    queryFn: () =>
      fetch("https://apirequestfields-production.up.railway.app/reasons").then(
        (res) => res.json()
      ),
  });

  const { data: urgencies, isLoading: isLoadingUrgencies } = useQuery({
    queryKey: ["urgencies_data"],
    queryFn: () =>
      fetch(
        `https://apirequestfields-production.up.railway.app/urgencies`
      ).then((res) => res.json()),
  });

  let aprovedOptions = [
    { title: "Sim", value: 1 },
    { title: "Não", value: 0 },
  ];

  let doneOptions = [
    { title: "Sim", value: 1 },
    { title: "Em Andamento", value: 2 },
    { title: "Não", value: 0 },
  ];

  let warrantyOptions = [
    { title: "Sim", value: 1 },
    { title: "Não", value: 0 },
  ];

  let hasDispatchOptions = [
    { title: "Sim", value: 1 },
    { title: "Não", value: 0 },
  ];

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event: any) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  async function allBindingFieldsAreValid() {
    return (
      /*
      client > 0 &&
      project > 0 &&
      line > 0 &&
      equipament > 0 &&
      reason > 0 &&
      urgency > 0 &&
      deadline != undefined
    */
      true
    );
  }

  async function handleSubmitt() {
    if (!allBindingFieldsAreValid()) {
      return null;
    }
    /*
    if ((done == 1 || !props?.request?.id) && selectedFiles.length < 1) {
      Toast.error(toast, "Informe no mínimo uma imagem.");
      return null;
    }
*/

    const data = {
      /*
      user_id: user?.id,
      client_id: client,
      project_id: project,
      line_id: line,
      equipament_id: equipament,
      reason_id: reason,
      urgency_id: urgency,
      description: description,
      initialDeadline: deadline,
      approved: approved,
      done: done,
      warranty: warranty,
      dispatch: dispatch,
      coast: coast,
      */
    };

    if (/*props.request?.id*/ true) {
      await update(requests?.[0]);
    } else {
      await create(data);
    }
  }

  async function create(request) {
    request.approved = request.approved == 0 ? null : request.approved;
    request.done = request.done == 0 ? null : request.done;

    try {
      let ret = await axios.post(
        "https://apirequestfields-production.up.railway.app/requests",
        request
      );

      selectedFiles.length > 0 && (await handleFormSubmit(ret.data.id, 1));
    } catch (err) {}
  }

  async function update(request) {
    try {
      let ret = await axios.put(
        "https://apirequestfields-production.up.railway.app/requests",
        request
      );

      if (request.done == 1) {
        selectedFiles.length > 0 && (await handleFormSubmit(ret.data.id, 2));
      }
    } catch (err) {}
  }

  const handleFormSubmit = async (requestId: number, type: number) => {
    const formData = new FormData();
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("files", selectedFiles[i]);
      }

      await axios.post(
        `https://apirequestfields-production.up.railway.app/images/?requestId=${requestId}&type=${type}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
    } finally {
    }
  };

  const [client, setClient] = useState(requests?.[30]?.Client?.id);
  const [project, setProject] = useState(requests?.[30]?.Project.id);
  const [line, setLine] = useState(requests?.[30]?.Line?.id);

  if (
    isLoadingClients ||
    isLoadingEquipaments ||
    isLoadingLines ||
    isLoadingProjects ||
    isLoadingReasons ||
    isLoadingReasons ||
    isLoadingRequests ||
    isLoadingUrgencies
  ) {
    return (
      <div className="h-svh bg-gray-800 flex flex-col items-center justify-center relative">
        <div className="h-10 w-10 animate-spin border-2 border-yellow-400 rounded absolute"></div>
        <div className="h-14 w-14 animate-spin border-2 border-yellow-400 rounded rotate-90 absolute"></div>
        <div className="h-12 w-12 animate-spin border-2 border-yellow-400 rounded rotate-45 absolute"></div>
        <div className="h-10 w-10 animate-spin border-2 border-yellow-400 rounded rotate-12 absolute"></div>
        <div className="h-14 w-14 animate-spin border-2 border-yellow-400 rounded rotate-90"></div>
      </div>
    );
  }

  console.log(projects.filter(reg => reg.Client.id == requests?.[30]?.Client.id));
  

  return (
    <div className="h-svh bg-gray-800 flex flex-col items-center">
      <Spinner
        array={clients}
        label="Cliente"
        name="client_id"
        selectedId={requests?.[30]?.Client.id}
        setSelectedValue={setClient}
        disabled={false}
      />
      <Spinner
        array={projects.filter(reg => reg.Client.id == requests?.[30]?.Client.id)}
        label="Projeto"
        name="client_id"
        selectedId={requests?.[30]?.Project.id}
        setSelectedValue={setProject}
        disabled={false}
      />

      <small>{JSON.stringify({
      client,
      project,
      line
    })}</small>
    </div>
  );
}
