import ModalLiderMes from "./ModalLiderMes";

export default function LiderTabla({dataMes}){
  const facturasData = dataMes?.map(resultados => resultados.resultado_factura).filter(Boolean); 
const totalFactura = facturasData.reduce((sum, factura) => sum + parseFloat(factura), 0);

    return(<>
    <div className="flex justify-center">
    <div className="overflow-x-auto w-4/5 my-6">
      <table className="min-w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-500 bg-opacity-20 px-2 py-2 text-left ">
            <th className="px-2">Lider</th>
            <th className="">Facturación</th>
            <th className="">Cump calidad</th>
            <th className="">Cump PYE</th>
            <th className="">Cump FTE</th>
            <th className="mx-2 ">Comisión</th>
          </tr>
        </thead>
        <tbody>
        {dataMes?.map((item, index) =>
                item.resultados.map((resultado, idx) => (
          <tr key={`${index}-${idx}`} className="bg-gray-300 bg-opacity-20 px-2 py-2 text-left ">
            <td className="px-2 py-2 flex text-black">{item.lider || "-"}<ModalLiderMes/></td>
            <td className="px-2 py-2 text-black">{item.resultado_factura || "-"}</td>
            <td className="px-2 py-2 text-black">{resultado.porcentaje_final_calidad || "-"}</td>
            <td className="px-2 py-2 text-black">{resultado.porcentaje_final_pye || "-"}</td>
            <td className="px-2 py-2 text-black">{resultado.fte_cumplimiento || "-"}</td>
            <td className="px-2 py-2 text-black">-</td>
          </tr>
          ))
        )}
          <tr className="bg-gray-500 bg-opacity-40 px-2 py-2 text-left ">
            <th className="px-2">Total</th>
            <th className="">{totalFactura.toLocaleString("es-CO", {style: "currency",currency: "COP"})}</th>
            <th className=""></th>
            <th className=""></th>
            <th className=""></th>
            <th className="mx-2 ">XXX</th>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
    </>)

}