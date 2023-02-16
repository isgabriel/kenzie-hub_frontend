import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useOutClick } from "../../../hooks/hookOutClick/useOutClick";
import { TechContext } from "../../../Providers/TechContext/TechContext";

export function ModalCreate() {
    const { setIsModalVisible, handleCreate } = useContext(TechContext);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    function submit(data) {
        if (data.title !== "" && data.status !== "") {
            handleCreate(data);
            reset();
        }
    }

    const refModalCreate = useOutClick(() => setIsModalVisible(null));

    return (
        <section>
            <div ref={refModalCreate}>
                <div>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setIsModalVisible(false)}>X</button>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="title">Nome</label>
                    <input
                        type="title"
                        id="title"
                        placeholder="Digite aqui o nome da tecnologia"
                        {...register("title")}
                    />

                    <section>
                        <label>Selecionar status</label>
                        <select {...register("status")} disabled={loading}>
                            <option hidden={true}>Selecionar status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </section>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </section>
    );
}
