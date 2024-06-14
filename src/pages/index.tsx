
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

  const { data: requests } = useQuery({
    queryKey: ["requests_request_modal"],
    queryFn: () =>
      fetch(
        "https://apirequestfields-production.up.railway.app/requests"
      ).then((res) => res.json()),
  });

  const { data: clients } = useQuery({
    queryKey: ["clients_request_modal"],
    queryFn: () =>
      fetch(
        "https://apirequestfields-production.up.railway.app/clients/actives"
      ).then((res) => res.json()),
  });

  const { data: projects, refetch: refetchProjects } = useQuery({
    queryKey: ["projects_request_modal"],
    queryFn: () => fetchProjects(),
  });

  async function fetchProjects() {
    const response = await fetch(
      `https://apirequestfields-production.up.railway.app/projects/client/`
    );

    if (!response.ok) {
      //setProject(0);
      return [];
    }
    let result = await response.json();
    //setProject(result[0].id);
    return result;
  }

  const { data: lines, refetch: refetchLines } = useQuery({
    queryKey: ["lines_request_modal"],
    queryFn: () => fetchLines(),
  });

  const fetchLines = async () => {
    const response = await fetch(
      `https://apirequestfields-production.up.railway.app/lines`
    );
    if (!response.ok) {
      //setLine(0);
      return [];
    }
    let result = await response.json();
    //setLine(result[0].id);
    return result;
  };

  const { data: equipaments, refetch: refetchEquipaments } = useQuery({
    queryKey: ["equipaments_request_modal"],
    queryFn: () => fetchEquipaments(),
  });

  const fetchEquipaments = async () => {
    const response = await fetch(
      `https://apirequestfields-production.up.railway.app/equipaments/line`
    );
    if (!response.ok) {
      //setEquipament(0);
      return [];
    }
    let result = await response.json();
    //setEquipament(result[0].id);
    return result;
  };

  const { data: reasons } = useQuery({
    queryKey: ["reasons_request_modal"],
    queryFn: () =>
      fetch("https://apirequestfields-production.up.railway.app/reasons").then(
        (res) => res.json()
      ),
  });

  const { data: urgencies, refetch: refetchUrgencies } = useQuery({
    queryKey: ["urgencies_request_modal"],
    queryFn: () => fetchUrgencies(),
  });

  async function fetchUrgencies() {
    const response = await fetch(
      `https://apirequestfields-production.up.railway.app/urgencies`
    );

    if (!response.ok) {
      //setUrgency(0);
      return [];
    }
    let result = await response.json();
    //setUrgency(result[0].id);
    return result;
  }

  /*
  useEffect(() => {
    refetchProjects();
    refetchLines();
    refetchEquipaments();
  }, [client, refetchEquipaments, refetchLines, refetchProjects]);

  useEffect(() => {
    refetchLines();
    refetchEquipaments();
  }, [project, refetchEquipaments, refetchLines]);

  useEffect(() => {
    refetchEquipaments();
  }, [line, refetchEquipaments]);

  useEffect(() => {
    approved == 0 && setDone(0);
  }, [approved]);

  */

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

  async function handleSubmit() {
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

  return (
    <div className="h-svh bg-gray-800">
      <form>
        
      </form>
    </div>
  );
}
