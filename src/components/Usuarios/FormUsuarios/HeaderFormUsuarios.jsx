import { Link } from "react-router-dom";
import { CheckIcon } from '@heroicons/react/20/solid'

export default function HeaderFormUsuarios({ titulo, cancelar }) {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            {titulo}
                        </h2>
                    </div>
                    {cancelar != "" && (
                        <div className="mt-5 flex lg:ml-4 lg:mt-0">
                            <span className="sm:ml-3">
                                <Link to="/admin/usuarios/">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                        Cancelar
                                    </button>
                                </Link>
                            </span>
                        </div>
                    )}

                </div>
            </div>
        </header>
    )
}
