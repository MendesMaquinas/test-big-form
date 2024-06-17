import Line from "../models/Line";
import Reason from "../models/Reason";
import Equipament from "../models/Equipament";

import { useQuery } from "@tanstack/react-query";

import InputForm from "../components/template/inputs/InputForm";

import { useForm } from "react-hook-form";
import axios from "axios";
import SpinnerFrom from "../components/template/inputs/SpinnerForm";
import InputRadioGroupForm from "../components/template/inputs/InputRadioGroupForm";

interface EquipamentModalProps {
  equipament: Equipament;
  setEquipament: (newEquipament: Equipament) => void;
  refetch: any;
}

export default function EquipamentModal(props: EquipamentModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data: any) {
    if (props.equipament.id) {
      await update(data);
    } else {
      await create(data);
    }
  }

  async function create(data) {
    try {
      await axios.post(
        "https://apirequestfields-production.up.railway.app/equipaments",
        data
      );

      props.refetch();
      props.setEquipament(null);
    } catch (err) {
      //setError(err.response?.data[0] ?? "Erro ao editar cliente.");
      console.log(err);
    }
  }

  async function update(data) {
    data.id = props.equipament.id;

    try {
      await axios.put(
        "https://apirequestfields-production.up.railway.app/equipaments/",
        data
      );

      props.refetch();
      props.setEquipament(null);
    } catch (err) {
      //setError(err.response?.data[0] ?? "Erro ao editar parada.");
      console.log(err);
    }
  }

  async function remove() {
    if (!props.equipament.id) {
      return null;
    }

    try {
      await axios.delete(
        "https://apirequestfields-production.up.railway.app/equipaments/" +
          props.equipament.id
      );

      props.refetch();
      props.setEquipament(null);
    } catch (err) {
      //setError(err.response?.data[0] ?? "Erro ao editar parada.");
      console.log(err);
    }
  }

  const { data: lines } = useQuery<Line[]>({
    queryKey: ["data_equipaments_modal_lines"],
    queryFn: () =>
      fetch(`https://apirequestfields-production.up.railway.app/lines`).then(
        (res) => res.json()
      ),
    refetchOnMount: "always",
  });

  let options = [
    { name: "active", title: "Sim", value: 1 },
    { name: "active", title: "Não", value: 0 },
  ];

  return (
    <form>
      <InputForm
        errors={errors}
        register={register}
        label="Nome"
        name="name"
        type="text"
        defaultValue={props.equipament.name}
      />
      <SpinnerFrom
        errors={errors}
        label="Linha"
        name="line_id"
        register={register}
        options={lines}
        selectedId={props.equipament?.Line?.id}
        disabled={false}
      />
      <InputRadioGroupForm
        title="Ativo"
        options={options}
        register={register}
        active={props.equipament.active}
      />
    </form>
  );
}
