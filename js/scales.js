// scales.js
// Escalas de cribado autocumplimentadas de uso libre, bilingües (ES/EN):
//  - DASI: Duke Activity Status Index (capacidad funcional). Hlatky et al., 1989.
//  - MUST: Malnutrition Universal Screening Tool (BAPEN). Uso libre citando la fuente.
//  - GAD-7: ansiedad (Spitzer et al., 2006). Dominio público.
//  - PHQ-9: depresión (Kroenke et al., 2001). Dominio público.
// Todas son ORIENTATIVAS y no diagnósticas.

import { frailResult, edmontonResult } from './content.js';

/* ---------- Opciones de frecuencia (GAD-7 / PHQ-9) ---------- */
export const FREQ_OPTIONS = [
  { v: 0, label: 'Nunca', label_en: 'Not at all' },
  { v: 1, label: 'Varios días', label_en: 'Several days' },
  { v: 2, label: 'Más de la mitad de los días', label_en: 'More than half the days' },
  { v: 3, label: 'Casi todos los días', label_en: 'Nearly every day' },
];

const FREQ_STEM = 'En las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?';
const FREQ_STEM_EN = 'Over the last 2 weeks, how often have you been bothered by the following problems?';

/* ---------- GAD-7 (ansiedad) ---------- */
export const GAD7 = {
  id: 'gad7', max: 21, stem: FREQ_STEM, stem_en: FREQ_STEM_EN,
  title: 'Ansiedad (GAD-7)', title_en: 'Anxiety (GAD-7)',
  intro: 'Cuestionario de ansiedad de uso libre. Piensa en las ÚLTIMAS 2 SEMANAS y responde con sinceridad.',
  intro_en: 'Free anxiety questionnaire. Think about the LAST 2 WEEKS and answer honestly.',
  note: 'GAD-7 (Spitzer et al., 2006). Cribado orientativo, no diagnóstico.',
  note_en: 'GAD-7 (Spitzer et al., 2006). Guidance screening, not diagnostic.',
  items: [
    { q: 'Sentirse nervioso/a, ansioso/a o con los nervios de punta', q_en: 'Feeling nervous, anxious or on edge' },
    { q: 'No poder dejar de preocuparse o no poder controlar la preocupación', q_en: 'Not being able to stop or control worrying' },
    { q: 'Preocuparse demasiado por diferentes cosas', q_en: 'Worrying too much about different things' },
    { q: 'Dificultad para relajarse', q_en: 'Trouble relaxing' },
    { q: 'Estar tan inquieto/a que le cuesta quedarse quieto/a', q_en: 'Being so restless that it is hard to sit still' },
    { q: 'Molestarse o irritarse con facilidad', q_en: 'Becoming easily annoyed or irritable' },
    { q: 'Sentir miedo, como si algo terrible fuera a pasar', q_en: 'Feeling afraid, as if something awful might happen' },
  ],
};

/* ---------- PHQ-9 (depresión) ---------- */
export const PHQ9 = {
  id: 'phq9', max: 27, stem: FREQ_STEM, stem_en: FREQ_STEM_EN,
  title: 'Estado de ánimo (PHQ-9)', title_en: 'Mood (PHQ-9)',
  intro: 'Cuestionario de estado de ánimo de uso libre. Piensa en las ÚLTIMAS 2 SEMANAS y responde con sinceridad.',
  intro_en: 'Free mood questionnaire. Think about the LAST 2 WEEKS and answer honestly.',
  note: 'PHQ-9 (Kroenke et al., 2001). Cribado orientativo, no diagnóstico.',
  note_en: 'PHQ-9 (Kroenke et al., 2001). Guidance screening, not diagnostic.',
  // El ítem 9 (índice 8) explora ideas de autolesión: activa una salvaguarda.
  selfHarmIndex: 8,
  items: [
    { q: 'Poco interés o placer en hacer las cosas', q_en: 'Little interest or pleasure in doing things' },
    { q: 'Sentirse desanimado/a, deprimido/a o sin esperanza', q_en: 'Feeling down, depressed or hopeless' },
    { q: 'Problemas para dormir, o dormir demasiado', q_en: 'Trouble falling or staying asleep, or sleeping too much' },
    { q: 'Sentirse cansado/a o con poca energía', q_en: 'Feeling tired or having little energy' },
    { q: 'Poco apetito o comer en exceso', q_en: 'Poor appetite or overeating' },
    { q: 'Sentirse mal consigo mismo/a, o sentir que es un fracaso o que ha decepcionado a su familia', q_en: 'Feeling bad about yourself, or that you are a failure or have let yourself or your family down' },
    { q: 'Dificultad para concentrarse (leer, ver la televisión)', q_en: 'Trouble concentrating on things, such as reading or watching television' },
    { q: 'Moverse o hablar tan despacio que otros lo han notado; o lo contrario, estar tan inquieto/a que se mueve mucho más de lo habitual', q_en: 'Moving or speaking so slowly that other people could have noticed; or the opposite, being so restless that you move around much more than usual' },
    { q: 'Pensamientos de que estaría mejor muerto/a o de hacerse daño de alguna manera', q_en: 'Thoughts that you would be better off dead, or of hurting yourself in some way' },
  ],
};

/* ---------- DASI (capacidad funcional) ---------- */
export const DASI = {
  id: 'dasi', max: 58.2, stem: '¿Es usted capaz de...?', stem_en: 'Are you able to...?',
  title: 'Capacidad funcional (DASI)', title_en: 'Functional capacity (DASI)',
  intro: 'Marca las actividades que eres capaz de hacer. Estima tu forma física (METs). Cuanto más alto, mejor.',
  intro_en: 'Tick the activities you are able to do. It estimates your fitness (METs). The higher, the better.',
  note: 'DASI (Hlatky et al., 1989). Estimación orientativa de la capacidad funcional.',
  note_en: 'DASI (Hlatky et al., 1989). Guidance estimate of functional capacity.',
  items: [
    { w: 2.75, q: 'Cuidar de sí mismo/a (comer, vestirse, bañarse o ir al baño)', q_en: 'Take care of yourself (eating, dressing, bathing or using the toilet)?' },
    { w: 1.75, q: 'Caminar dentro de casa', q_en: 'Walk indoors, such as around your house?' },
    { w: 2.75, q: 'Caminar una o dos manzanas en llano', q_en: 'Walk a block or two on level ground?' },
    { w: 5.50, q: 'Subir un tramo de escaleras o una cuesta', q_en: 'Climb a flight of stairs or walk up a hill?' },
    { w: 8.00, q: 'Correr una distancia corta', q_en: 'Run a short distance?' },
    { w: 2.70, q: 'Hacer tareas ligeras en casa (quitar el polvo, lavar los platos)', q_en: 'Do light work around the house like dusting or washing dishes?' },
    { w: 3.50, q: 'Hacer tareas moderadas en casa (pasar la aspiradora, barrer, cargar la compra)', q_en: 'Do moderate work around the house like vacuuming, sweeping floors or carrying groceries?' },
    { w: 8.00, q: 'Hacer tareas pesadas en casa (fregar el suelo, mover muebles pesados)', q_en: 'Do heavy work around the house like scrubbing floors or moving heavy furniture?' },
    { w: 4.50, q: 'Hacer trabajos de jardín (rastrillar hojas, quitar malas hierbas, cortar el césped)', q_en: 'Do yardwork like raking leaves, weeding or pushing a power mower?' },
    { w: 5.25, q: 'Tener relaciones sexuales', q_en: 'Have sexual relations?' },
    { w: 6.00, q: 'Hacer actividades recreativas moderadas (bailar, golf, bolos, tenis en dobles)', q_en: 'Take part in moderate recreational activities like dancing, golf, bowling or doubles tennis?' },
    { w: 7.50, q: 'Practicar deportes intensos (natación, tenis individual, fútbol, baloncesto, esquí)', q_en: 'Take part in strenuous sports like swimming, singles tennis, football, basketball or skiing?' },
  ],
};

/** METs estimados a partir de la puntuación DASI (VO2pico = 0,43·DASI + 9,6). */
export function dasiMets(score) {
  const vo2 = 0.43 * score + 9.6;
  return vo2 / 3.5;
}

/* ---------- MUST (riesgo nutricional) ---------- */
export const MUST_WEIGHTLOSS = [
  { v: 0, label: 'Menos del 5% (o nada)', label_en: 'Less than 5% (or none)' },
  { v: 1, label: 'Entre el 5% y el 10%', label_en: 'Between 5% and 10%' },
  { v: 2, label: 'Más del 10%', label_en: 'More than 10%' },
];

export const MUST = {
  id: 'must', max: 6,
  title: 'Riesgo nutricional (MUST)', title_en: 'Nutrition risk (MUST)',
  intro: 'Necesitas tu peso y tu estatura. Herramienta de BAPEN de uso libre.',
  intro_en: 'You need your weight and height. Free BAPEN tool.',
  note: 'MUST © BAPEN. Cribado orientativo; no sustituye la valoración de un nutricionista.',
  note_en: 'MUST © BAPEN. Guidance screening; does not replace assessment by a dietitian.',
};

export function bmiScore(bmi) {
  if (bmi == null || isNaN(bmi)) return 0;
  if (bmi < 18.5) return 2;
  if (bmi < 20) return 1;
  return 0;
}

/* ---------- Interpretación de resultados ---------- */

export function gad7Result(s) {
  if (s <= 4) return { color: '#22c55e', label: 'Ansiedad mínima', label_en: 'Minimal anxiety', message: 'Tus niveles de ansiedad son bajos. Las técnicas de relajación te ayudarán a mantenerte así.', message_en: 'Your anxiety levels are low. Relaxation techniques will help you stay this way.' };
  if (s <= 9) return { color: '#84cc16', label: 'Ansiedad leve', label_en: 'Mild anxiety', message: 'Ansiedad leve. Practicar la respiración y el mindfulness a diario puede ayudarte mucho.', message_en: 'Mild anxiety. Practising breathing and mindfulness daily can help a lot.' };
  if (s <= 14) return { color: '#f59e0b', label: 'Ansiedad moderada', label_en: 'Moderate anxiety', message: 'Ansiedad moderada. Coméntalo con tu equipo médico; hay técnicas y apoyos que pueden ayudarte antes de la cirugía.', message_en: 'Moderate anxiety. Mention it to your medical team; there are techniques and support that can help before surgery.' };
  return { color: '#ef4444', label: 'Ansiedad grave', label_en: 'Severe anxiety', message: 'Ansiedad alta. Es importante que lo compartas con tu equipo médico para recibir apoyo adecuado.', message_en: 'High anxiety. It is important to share this with your medical team so you can get proper support.' };
}

export function phq9Result(s) {
  if (s <= 4) return { color: '#22c55e', label: 'Mínima', label_en: 'Minimal', message: 'Tu estado de ánimo es bueno. Cuidar el sueño, el ejercicio y las relaciones te ayuda a mantenerlo.', message_en: 'Your mood is good. Looking after sleep, exercise and relationships helps keep it that way.' };
  if (s <= 9) return { color: '#84cc16', label: 'Leve', label_en: 'Mild', message: 'Ánimo algo bajo. El ejercicio, la rutina y el apoyo de tus seres queridos suelen ayudar.', message_en: 'Slightly low mood. Exercise, routine and support from loved ones usually help.' };
  if (s <= 14) return { color: '#f59e0b', label: 'Moderado', label_en: 'Moderate', message: 'Ánimo moderadamente bajo. Coméntalo con tu equipo médico; conviene acompañarlo bien antes de la cirugía.', message_en: 'Moderately low mood. Mention it to your medical team; it is worth supporting well before surgery.' };
  if (s <= 19) return { color: '#f97316', label: 'Moderadamente grave', label_en: 'Moderately severe', message: 'Ánimo bastante bajo. Es importante que lo hables con tu equipo médico cuanto antes.', message_en: 'Quite low mood. It is important to talk to your medical team as soon as possible.' };
  return { color: '#ef4444', label: 'Grave', label_en: 'Severe', message: 'Ánimo muy bajo. Por favor, comparte esto con tu equipo médico; no tienes que pasarlo solo/a.', message_en: 'Very low mood. Please share this with your medical team; you do not have to go through it alone.' };
}

export function dasiResult(s) {
  const mets = dasiMets(s);
  const m = Math.round(mets * 10) / 10;
  if (s < 10) return { color: '#f59e0b', mets: m, label: 'Capacidad funcional baja', label_en: 'Low functional capacity', message: `Capacidad estimada ~${m} MET. Empieza con ejercicio suave y seguro (en silla o con apoyo) y progresa poco a poco. Coméntalo con tu equipo.`, message_en: `Estimated capacity ~${m} METs. Start with gentle, safe exercise (seated or with support) and build up slowly. Mention it to your team.` };
  if (s < 34) return { color: '#84cc16', mets: m, label: 'Capacidad funcional moderada', label_en: 'Moderate functional capacity', message: `Capacidad estimada ~${m} MET. Buen punto de partida: mantén el ejercicio aeróbico y de fuerza para seguir mejorando.`, message_en: `Estimated capacity ~${m} METs. A good starting point: keep up aerobic and strength exercise to keep improving.` };
  return { color: '#22c55e', mets: m, label: 'Buena capacidad funcional', label_en: 'Good functional capacity', message: `Capacidad estimada ~${m} MET. ¡Muy bien! Mantén tu nivel de actividad hasta la cirugía.`, message_en: `Estimated capacity ~${m} METs. Well done! Keep up your activity level until surgery.` };
}

export function mustResult(s) {
  if (s <= 0) return { color: '#22c55e', label: 'Riesgo bajo', label_en: 'Low risk', message: 'Riesgo nutricional bajo. Mantén una dieta con suficiente proteína e hidratación.', message_en: 'Low nutritional risk. Keep a diet with enough protein and hydration.' };
  if (s === 1) return { color: '#f59e0b', label: 'Riesgo medio', label_en: 'Medium risk', message: 'Riesgo nutricional medio. Cuida la proteína en cada comida y coméntalo en tu consulta; quizá convenga vigilar tu peso.', message_en: 'Medium nutritional risk. Take care with protein at each meal and mention it at your appointment; your weight may need monitoring.' };
  return { color: '#ef4444', label: 'Riesgo alto', label_en: 'High risk', message: 'Riesgo nutricional alto. Es importante que lo comentes pronto con tu equipo médico o nutricionista.', message_en: 'High nutritional risk. It is important to discuss this soon with your medical team or dietitian.' };
}

/* ---------- Registro de todas las escalas (para el hub y la comparación) ---------- */
export const SCALE_LIST = [
  { id: 'dasi', icon: '🏃', route: 'dasi', name: 'Capacidad funcional (DASI)', name_en: 'Functional capacity (DASI)', higherBetter: true },
  { id: 'gad7', icon: '😰', route: 'gad7', name: 'Ansiedad (GAD-7)', name_en: 'Anxiety (GAD-7)', higherBetter: false },
  { id: 'phq9', icon: '🌧️', route: 'phq9', name: 'Estado de ánimo (PHQ-9)', name_en: 'Mood (PHQ-9)', higherBetter: false },
  { id: 'must', icon: '🥗', route: 'must', name: 'Riesgo nutricional (MUST)', name_en: 'Nutrition risk (MUST)', higherBetter: false },
  { id: 'frail', icon: '🧭', route: 'fragilidad', name: 'Fragilidad rápida (FRAIL)', name_en: 'Quick frailty (FRAIL)', higherBetter: false },
  { id: 'edmonton', icon: '📋', route: 'edmonton', name: 'Fragilidad (Edmonton)', name_en: 'Frailty (Edmonton)', higherBetter: false },
];

export function scaleMeta(id) {
  return SCALE_LIST.find((x) => x.id === id) || null;
}

/** Interpretación unificada por id de escala. */
export function resultForScale(id, score) {
  switch (id) {
    case 'gad7': return gad7Result(score);
    case 'phq9': return phq9Result(score);
    case 'dasi': return dasiResult(score);
    case 'must': return mustResult(score);
    case 'frail': return frailResult(score);
    case 'edmonton': return edmontonResult(score);
    default: return null;
  }
}
