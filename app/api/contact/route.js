import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("Formulario recibido:", body);

    return NextResponse.json({
      success: true,
      message: "Ruta de contacto funcionando correctamente.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}