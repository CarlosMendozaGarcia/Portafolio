export type ProjectStatus =
|"Arreglos"
|"En progreso"
|"En pausa"
|"Completado"

export const ProjectStatusColors: Record<ProjectStatus, string> = {
  "Arreglos": "#f59e0b", // naranja
  "En progreso": "#3b82f6",       // azul
  "Completado": "#22c55e",        // verde
  "En pausa": "#eab308",          // amarillo
};