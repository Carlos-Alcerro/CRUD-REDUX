import Form from "./components/Form";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductosThunks,
  eliminarProducto,
} from "./app/store/sliceProductos/thunks";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [updateState, setUpdateState] = useState(null);
  const { productos, loading } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosThunks());
  }, [dispatch]);

  const openModal = (prod) => {
    setUpdateState(prod);
    setId(prod._id);
    setShowModal(true);
    setUpdate(true);
  };

  console.log(updateState);

  return (
    <>
      <div className="container mx-auto h-[calc(100vh-7rem)] flex items-center justify-center gap-5">
        <Modal Visible={showModal} Close={() => setShowModal(false)}>
          <div className="flex justify-center p-3">
            <Form id={id} updateState={updateState} update={update} />
          </div>
        </Modal>
        <Form />
        <div>
          <div className="mb-5">
            <p className="text-2xl text-sky-600 font-bold">
              Cantidad de productos :{" "}
              <span className="px-3 py-2 bg-sky-800 text-white rounded-full">
                {productos.length}
              </span>
            </p>
          </div>
          {productos.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <>
              {productos.length > 0 ? (
                <>
                  <table className="border border-spacing-3">
                    <thead className="bg-blue-400">
                      <tr>
                        <th className="p-3">Nombre</th>
                        <th className="p-3">Descripcion</th>
                        <th className="p-3">Categoria</th>
                        <th className="p-3">Precio</th>
                        <th className="p-3">Cantidad</th>
                        <th className="p-3">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map((prod) => (
                        <tr key={prod._id}>
                          <td className="p-3">{prod.nombre}</td>
                          <td className="p-3">{prod.descripcion}</td>
                          <td className="p-3">{prod.categoria}</td>
                          <td className="p-3">{prod.precio}</td>
                          <td className="p-3">{prod.cantidad}</td>
                          <td className="p-3 gap-5 flex items-center">
                            <svg
                              onClick={() =>
                                dispatch(eliminarProducto(prod._id))
                              }
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                            <svg
                              onClick={() => openModal(prod)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <p>No se encontraron productos</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
