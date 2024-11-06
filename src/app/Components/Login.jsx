export default function Login(){
    return<>
    <div className="flex flex-col items-center justify-center m-8" >
  <div className="bg-gray-100 opacity-80  shadow-lg rounded px-8 pt-6 pb-8 mb-4">
    <h1 className="text-3xl font-bold mb-3 text-center">Bienvenido</h1>
    <h2 className="text-xs text-gray-500 font-bold mb-6 text-center">Por favor, inicia sesión</h2>
    <form>
      <div className="mb-6 input-wrapper">
        <input type="text" placeholder="Usuario" name="usuario" className="input"></input>
      </div>
      <div className="mb-6 input-wrapper">
      <input type="password" placeholder="Contraseña" name="contrasena" className="input"></input>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-green-500 hover:bg-green-600 text-sm text-white font-bold py-2 px-3 rounded focus:outline-none shadow-lg" type="submit">
          Ingresar
        </button>
      </div>
    </form>
  </div>
</div>
    </>
}