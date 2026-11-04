function crearFormularioMacrame() {
  var form = FormApp.create('Inscripción · Taller de Macramé Latidoo');
  form.setDescription('¡Estamos deseando compartir una tarde llena de creatividad, nudos y diversión!');
  form.setConfirmationMessage('¡Gracias por confiar en nosotros! Hemos recibido la inscripción.');

  function T(q, r) { form.addTextItem().setTitle(q).setRequired(r); }
  function P(q, r) { form.addParagraphTextItem().setTitle(q).setRequired(r); }
  function D(q, r) { form.addDateItem().setTitle(q).setRequired(r); }
  function R(q, o, r) { form.addMultipleChoiceItem().setTitle(q).setChoiceValues(o).setRequired(r); }
  function C(q, o, r) { form.addCheckboxItem().setTitle(q).setChoiceValues(o).setRequired(r); }
  function S(t, d) { form.addSectionHeaderItem().setTitle(t).setHelpText(d || ''); }

  S('1. Datos del pequeño/a', '');
  T('Nombre y apellidos del menor', true);
  D('Fecha de nacimiento', true);
  T('Edad', true);
  T('Colegio', true);
  R('¿Ha participado anteriormente en actividades de Latidoo?', ['Sí', 'No'], true);
  C('Fecha en la que asistirá', ['Viernes 27 de noviembre'], true);

  S('2. Datos de la familia', '');
  T('Madre / Padre / Tutor legal 1: nombre y apellidos', true);
  T('Madre / Padre / Tutor legal 1: DNI', true);
  T('Madre / Padre / Tutor legal 1: teléfono', true);
  T('Madre / Padre / Tutor legal 1: correo electrónico', true);
  T('Madre / Padre / Tutor legal 2: nombre y apellidos', false);
  T('Madre / Padre / Tutor legal 2: DNI', false);
  T('Madre / Padre / Tutor legal 2: teléfono', false);

  S('3. Información importante sobre el menor', 'Para poder ofrecer una atención adecuada y personalizada, necesitamos conocer algunos detalles.');
  P('¿Tiene alguna alergia o intolerancia alimentaria?', true);
  P('¿Tiene alguna alergia a medicamentos?', true);
  P('¿Presenta alguna condición médica que debamos conocer?', true);
  P('¿Toma alguna medicación? Indicar cuál y las pautas necesarias.', true);
  P('¿Tiene alguna necesidad específica de apoyo o atención?', true);
  P('¿Hay alguna otra información relevante que debamos conocer?', true);
  P('Observaciones adicionales', false);

  S('4. Contacto de emergencia y recogida', 'Persona de contacto en caso de emergencia (si no son los tutores). El menor únicamente podrá abandonar las instalaciones acompañado de sus tutores legales o de las personas expresamente autorizadas.');
  T('Persona de contacto en emergencia: nombre y apellidos', false);
  T('Persona de contacto en emergencia: teléfono', false);
  T('Persona de contacto en emergencia: parentesco', false);
  T('Persona autorizada para recoger al menor 1: nombre y apellidos / DNI / teléfono', true);
  T('Persona autorizada para recoger al menor 2: nombre y apellidos / DNI / teléfono', false);
  T('Persona autorizada para recoger al menor 3: nombre y apellidos / DNI / teléfono', false);

  S('5. Autorización de imagen', 'Autorizo a la Asociación Latidoo a captar fotografías y vídeos del menor durante el taller de macramé y a utilizarlos para la difusión y promoción de sus actividades en redes sociales, página web y otros canales de comunicación de Latidoo. Esta autorización es voluntaria y no condiciona la participación del menor en el taller. Podrá retirarse en cualquier momento mediante comunicación escrita a la organización.');
  R('Marque una única opción', ['SÍ, AUTORIZO la captación y publicación de fotografías y vídeos en los que aparezca el rostro del menor.', 'SÍ, AUTORIZO CONDICIONADAMENTE la captación y publicación de fotografías y vídeos del menor, siempre que no aparezca su rostro ni ningún elemento que permita identificarlo.', 'NO AUTORIZO la captación ni publicación de imágenes o vídeos del menor con fines promocionales.'], true);

  S('6. Aceptación de normas y condiciones', 'Como madre, padre o tutor legal, declaro que: los datos facilitados son veraces y están actualizados; he informado a la organización de cualquier circunstancia médica, alergia o necesidad específica relevante para la atención del menor; autorizo la participación del menor en las actividades programadas durante el taller; me comprometo a respetar los horarios de entrada y salida establecidos y a comunicar cualquier cambio relevante en la información facilitada. Seguridad y responsabilidad: soy consciente de que las actividades infantiles pueden implicar riesgos inherentes a su desarrollo y que, pese a las medidas de prevención, supervisión y seguridad adoptadas por la organización, pueden producirse accidentes o lesiones. La Asociación Latidoo se compromete a adoptar las medidas razonables de prevención, vigilancia y atención necesarias durante el desarrollo de las actividades. La organización no asumirá responsabilidad por lesiones o accidentes que no sean consecuencia de un incumplimiento de sus obligaciones legales o de su deber de diligencia. Esta declaración no supone una renuncia a los derechos que legalmente correspondan al menor o a sus representantes legales. En caso de accidente o emergencia, autorizo a la organización a contactar con los servicios sanitarios y a facilitar la atención médica que resulte necesaria, intentando contactar previamente con los tutores legales siempre que las circunstancias lo permitan.');
  C('Acepto las normas y condiciones anteriores', ['Acepto las normas y condiciones'], true);

  S('7. Protección de datos', 'Los datos personales facilitados serán tratados por la Asociación Latidoo exclusivamente para gestionar la inscripción, organización, atención y seguridad de los participantes en el taller. Los datos no serán cedidos a terceros salvo obligación legal o cuando resulte necesario para atender una emergencia. Las personas interesadas podrán ejercer sus derechos de acceso, rectificación, supresión, oposición y demás derechos reconocidos por la normativa vigente mediante comunicación a la organización.');

  S('8. Firma y confirmación', 'Declaro haber leído y aceptado las condiciones anteriores.');
  T('Nombre del padre, madre o tutor legal', true);
  T('DNI', true);
  D('Fecha', true);
  T('Firma (escriba su nombre completo)', true);

  Logger.log('Editar: ' + form.getEditUrl());
  Logger.log('Enlace: ' + form.getPublishedUrl());
}
