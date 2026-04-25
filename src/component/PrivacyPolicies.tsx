export function PrivacyPolicies() {
  return (
    <div className="flex justify-center items-center flex-col px-6">
      <h3 className="text-slate-800 font-bold mb-8 uppercase text-sm tracking-widest pt-8 border-b-2 border-slate-200 pb-2">
        Políticas de Privacidad
      </h3>

      <div className="max-w-4xl text-justify text-slate-600 text-sm md:text-base leading-relaxed">
        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">
            1. Responsable del Sitio Web
          </h4>
          <p>
            El responsable de este sitio web es el{" "}
            <strong>Hostal Monte Carmelo Comfort SAS</strong>, establecimiento
            ubicado en El Carmen de Bolívar, Bolívar, Colombia. Para consultas
            sobre privacidad, puede contactarnos a través de nuestros canales de
            WhatsApp o correo electrónico disponibles en el sitio.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">
            2. Datos que NO Recopilamos
          </h4>
          <p className="mb-2">
            Este sitio web es exclusivamente informativo y de contacto. En
            consecuencia:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              No contamos con formularios de registro ni creación de cuentas.
            </li>
            <li>
              No almacenamos datos personales como nombre, correo, teléfono ni
              datos de pago.
            </li>
            <li>
              No utilizamos cookies de seguimiento, herramientas de analítica ni
              píxeles publicitarios.
            </li>
            <li>
              No procesamos ningún tipo de información personal de los
              visitantes.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">
            3. Contacto Iniciado por el Usuario
          </h4>
          <p>
            Cuando el usuario decide contactarnos voluntariamente por WhatsApp o
            correo electrónico, la información compartida es gestionada
            directamente por esas plataformas. Dicha información se usará{" "}
            <strong>
              únicamente para responder su consulta o gestionar su reserva
            </strong>
            , y no será compartida con terceros salvo obligación legal.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">
            4. Plataformas de Terceros
          </h4>
          <p>
            Los botones de contacto redirigen a WhatsApp (Meta Platforms Inc.) y
            al cliente de correo del usuario. El Hostal no se responsabiliza por
            el tratamiento de datos que realicen dichas plataformas externas.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">
            5. Derechos del Usuario
          </h4>
          <p className="mb-2">
            Conforme a la <strong>Ley 1581 de 2012 de Colombia</strong>, usted
            tiene derecho a:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>
              Solicitar la supresión de sus datos cuando no exista obligación
              legal de conservarlos.
            </li>
            <li>
              Presentar quejas ante la Superintendencia de Industria y Comercio
              (SIC).
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">6. Seguridad</h4>
          <p>
            Dado que no recopilamos datos en este sitio, el riesgo de exposición
            es mínimo. Recomendamos al usuario tomar las precauciones habituales
            al navegar en internet.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-slate-800 mb-2">7. Modificaciones</h4>
          <p>
            Podremos actualizar esta Política en cualquier momento. Los cambios
            serán publicados en este mismo sitio con su respectiva fecha de
            actualización.
          </p>
        </section>
      </div>
    </div>
  );
}
