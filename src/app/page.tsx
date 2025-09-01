import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Clock, Users, MapPin, Phone, Mail, Star, CheckCircle, Zap, Heart, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LaewFitGym() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-orange-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">
              LAEW <span className="text-orange-500">FIT</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-white hover:text-orange-500 transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-white hover:text-orange-500 transition-colors">
              Servicios
            </Link>
            <Link href="#planes" className="text-white hover:text-orange-500 transition-colors">
              Planes
            </Link>
            <Link href="#ubicacion" className="text-white hover:text-orange-500 transition-colors">
              Ubicación
            </Link>
            <Link href="#contacto" className="text-white hover:text-orange-500 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">Únete Ahora</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900/20"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="/yo.jpg"
            alt="Imagen de perfil"
            fill
            className="object-cover"
          />
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              #1 Gimnasio de la Ciudad
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              TRANSFORMA TU
              <span className="block text-orange-500">CUERPO Y MENTE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              En LAEW FIT encontrarás el equipamiento más moderno, entrenadores certificados y un ambiente motivador
              para alcanzar tus objetivos fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg"
              >
                Ver Planes
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestros <span className="text-orange-500">Servicios</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Todo lo que necesitas para tu transformación física en un solo lugar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-white">Entrenamiento Funcional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    Ejercicios que mejoran tu fuerza, resistencia y movilidad para la vida diaria.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-white">Cardio Avanzado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    Equipos de última generación para maximizar tu quema de calorías.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-white">Entrenamiento Personal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    Planes personalizados con entrenadores certificados para resultados óptimos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-white">Clases Grupales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    Yoga, Pilates, Spinning, Zumba y más clases para mantenerte motivado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  ¿Por qué elegir <span className="text-orange-500">LAEW FIT</span>?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Equipamiento de Última Generación</h3>
                      <p className="text-gray-400">
                        Máquinas y equipos de las mejores marcas mundiales, renovados constantemente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Horarios Flexibles</h3>
                      <p className="text-gray-400">horario de atencio de 7am a 8pm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Entrenadores Certificados</h3>
                      <p className="text-gray-400">
                        Profesionales con certificaciones internacionales para guiarte en tu proceso.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Ambiente Motivador</h3>
                      <p className="text-gray-400">Una comunidad fitness que te apoya y motiva a alcanzar tus metas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/fondo1.jpg?height=600&width=500"
                  alt="Instalaciones LAEW FIT"
                  width={500}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Planes Section */}
        <section id="planes" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Elige tu <span className="text-orange-500">Plan</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Planes flexibles diseñados para adaptarse a tu estilo de vida y objetivos
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
              {/* Plan Básico */}
              <Card className="bg-black border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">plan básico</CardTitle>
                  <div className="text-4xl font-bold text-orange-500 mb-2">$20.00</div>
                  <CardDescription className="text-gray-400">por mes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-300">Acceso a área de pesas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-300">Área de cardio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-300">Vestuarios</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-300">Horario de atencion de 7am a 8pm</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-6">Elegir Plan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Lo que dicen nuestros <span className="text-orange-500">miembros</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "LAEW FIT cambió mi vida completamente. Los entrenadores son increíbles y las instalaciones son de
                    primera clase."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">María Rodríguez</p>
                      <p className="text-gray-400 text-sm">Miembro desde 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "El ambiente es súper motivador y los equipos están siempre en perfecto estado. ¡Recomendado al
                    100%!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">CL</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Carlos López</p>
                      <p className="text-gray-400 text-sm">Miembro desde 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Las clases grupales son fantásticas y el horario 24/7 se adapta perfectamente a mi rutina de
                    trabajo."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">AG</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ana García</p>
                      <p className="text-gray-400 text-sm">Miembro desde 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ubicación y Contacto */}
        <section id="ubicacion" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Visítanos <span className="text-orange-500">Hoy</span>
              </h2>
              <p className="text-xl text-gray-400">Ven y conoce nuestras instalaciones</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Dirección</h4>
                      <p className="text-gray-400">Plaza Puruha</p>
                      <p className="text-gray-400">Riobamba, Ecaudor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                      <p className="text-gray-400">+593 995027723</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-400">laewfitgym@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Horarios</h4>
                      <p className="text-gray-400">7 Am a 8 Pm, Lunes a Viernes</p>
                      <p className="text-gray-400 text-sm"></p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                    Agendar Visita Gratuita
                  </Button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-orange-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-orange-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-orange-500"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-orange-500"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-white">
                  LAEW <span className="text-orange-500">FIT</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Tu gimnasio de confianza para alcanzar tus objetivos fitness y transformar tu vida.
              </p>
              <div className="flex space-x-4">
                                <Link href="https://www.tiktok.com/@laew.fit?lang=es" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="text-white h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.16-4.2-1.8-6.51.42-2.58 2.39-4.5 4.81-5.62 2.42-1.12 5.11-1.19 7.56-.19.57.23 1.09.53 1.59.87v-4.66c-.29-.15-.58-.31-.86-.48-.88-.52-1.82-.86-2.79-1.05-1.02-.19-2.05-.25-3.08-.25-1.4-.01-2.8-.01-4.2.02z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Entrenamiento Personal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Clases Grupales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Nutrición
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Evaluaciones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Planes</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Plan Básico
                  </Link>
                </li>
                
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Plaza Puruha </li>
                <li>Riobamba, Ecuador</li>
                <li>+593 995027723</li>
                <li>laewfitgym@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} LAEW FIT Gimnasio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
