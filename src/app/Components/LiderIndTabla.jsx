import ModalLiderInd from "./ModalLiderInd";

export default function LiderIndTabla(){
    return(<>
    <div className="flex justify-center">
    <div className="overflow-x-auto w-4/5 my-6">
      <table className="min-w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-500 bg-opacity-20 px-2 py-2 text-left ">
            <th className="px-2">Mes</th>
            <th className="">Facturación</th>
            <th className="">Cump calidad</th>
            <th className="">Cump PYE</th>
            <th className="">Cump FTE</th>
            <th className="mx-2 ">Comisión</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300 bg-opacity-20 px-2 py-2 text-left ">
            <td className="px-2 py-2 text-gray-700"><ModalLiderInd/></td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
          </tr>
          <tr className="bg-gray-500 bg-opacity-40 px-2 py-2 text-left ">
            <th className="px-2">Total</th>
            <th className="">XXX</th>
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