import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useOutClick } from "../../../hooks/hookOutClick/useOutClick";
import { TechContext } from "../../../Providers/TechContext/TechContext";

export function ModalUpdate() {
    const { setIsModalUpdateVisible, updateTech, removeTech, selectedTech } =
        useContext(TechContext);

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    function submit(data) {
        if (data.status !== "") {
            updateTech(selectedTech.id, data, setLoading);
            reset();
        }
    }

    const refModalUpdate = useOutClick(() => setIsModalUpdateVisible(null));

    return (
        <section>
            <div
                ref={refModalUpdate}
                onClick={(event) => event.stopPropagation()}
            >
                <div>
                    <h3>Editar Tecnologia</h3>
                    <button onClick={() => setIsModalUpdateVisible(false)}>
                        X
                    </button>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="title">Nome</label>
                    <input
                        type="text"
                        id="title"
                        value={selectedTech.title}
                        placeholder={selectedTech.title}
                        disabled
                    />

                    <div>
                        <select
                            {...register("status")}
                            disabled={loading}
                            required
                        >
                            <option hidden={true}>Selecionar status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>

                    <div>
                        <button type="submit">Salvar alterações</button>

                        <button
                            onClick={() => {
                                removeTech(selectedTech.id, setLoading);
                                setIsModalUpdateVisible(false);
                            }}
                            type="button"
                        >
                            Excluir
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
