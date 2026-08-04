import Button from "./Button";

export default function HeroButton() {
  return (
    <div className="flex flex-wrap gap-5">

      <Button href="#contacto">
        Agendar asesoría
      </Button>

      <Button
        href="#soluciones"
        variant="secondary"
      >
        Conocer nuestras soluciones
      </Button>

    </div>
  );
}