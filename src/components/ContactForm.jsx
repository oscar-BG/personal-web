import { useForm, ValidationError } from '@formspree/react';

const fieldClass =
  'w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100';

const labelClass =
  'mb-2 block text-sm font-bold text-slate-700';

const errorClass =
  'mt-2 text-xs font-semibold text-red-600';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xaqzanwj');

  if (state.succeeded) {
    return (
      <div
        className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h4 className="mt-5 text-xl font-black text-slate-950">
          Recibimos tu mensaje
        </h4>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Gracias por escribirnos. Revisaremos la información y te
          contactaremos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Información adicional para identificar el correo */}
      <input
        type="hidden"
        name="_subject"
        value="Nuevo contacto desde RexCoreSolutions"
      />

      <input
        type="hidden"
        name="origen"
        value="Formulario general de contacto"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            required
            className={fieldClass}
          />

          <ValidationError
            prefix="Nombre"
            field="name"
            errors={state.errors}
            className={errorClass}
          />
        </div>

        <div>
          <label htmlFor="business" className={labelClass}>
            Negocio o empresa
          </label>

          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Nombre de tu negocio"
            className={fieldClass}
          />

          <ValidationError
            prefix="Negocio"
            field="business"
            errors={state.errors}
            className={errorClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Correo electrónico
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="correo@empresa.com"
          required
          className={fieldClass}
        />

        <ValidationError
          prefix="Correo"
          field="email"
          errors={state.errors}
          className={errorClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          ¿Qué te gustaría crear?
        </label>

        <div className="relative">
          <select
            id="service"
            name="service"
            defaultValue=""
            required
            className={`${fieldClass} appearance-none pr-11`}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>

            <option value="Página web">
              Una página web
            </option>

            <option value="Sistema para negocio">
              Un sistema para mi negocio
            </option>

            <option value="Aplicación móvil">
              Una aplicación móvil
            </option>

            <option value="Mejora de proyecto existente">
              Mejorar algo que ya tengo
            </option>

            <option value="No estoy seguro">
              Todavía no estoy seguro
            </option>
          </select>

          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>

        <ValidationError
          prefix="Servicio"
          field="service"
          errors={state.errors}
          className={errorClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Cuéntanos qué necesitas
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Por ejemplo: quiero recibir más solicitudes, controlar mis ventas o dejar de usar hojas de cálculo..."
          required
          className={`${fieldClass} resize-y`}
        />

        <ValidationError
          prefix="Mensaje"
          field="message"
          errors={state.errors}
          className={errorClass}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="group inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? (
          <>
            <svg
              className="mr-2 h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-30"
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                className="opacity-90"
                fill="currentColor"
                d="M21 12a9 9 0 00-9-9v4a5 5 0 015 5h4z"
              />
            </svg>

            Enviando mensaje...
          </>
        ) : (
          <>
            Enviar mi información

            <svg
              className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </>
        )}
      </button>

      <ValidationError
        errors={state.errors}
        className={errorClass}
      />

      <p className="text-center text-xs leading-5 text-slate-400">
        Solo utilizaremos tus datos para responder a tu solicitud.
      </p>
    </form>
  );
}