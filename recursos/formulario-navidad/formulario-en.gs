function crearFormularioNavidadEN() {
  var form = FormApp.create('Registration · English Christmas Camp');
  form.setDescription('We look forward to sharing a Christmas full of creativity, fun and surprises!');
  form.setConfirmationMessage('Thank you for trusting us! We have received your registration.');

  function T(q, r) { form.addTextItem().setTitle(q).setRequired(r); }
  function P(q, r) { form.addParagraphTextItem().setTitle(q).setRequired(r); }
  function D(q, r) { form.addDateItem().setTitle(q).setRequired(r); }
  function R(q, o, r) { form.addMultipleChoiceItem().setTitle(q).setChoiceValues(o).setRequired(r); }
  function C(q, o, r) { form.addCheckboxItem().setTitle(q).setChoiceValues(o).setRequired(r); }
  function S(t, d) { form.addSectionHeaderItem().setTitle(t).setHelpText(d || ''); }

  S('1. Child\'s details', '');
  T('Child\'s full name', true);
  D('Date of birth', true);
  T('Age', true);
  T('School', true);
  R('Has your child previously taken part in Latidoo activities?', ['Yes', 'No'], true);
  C('Days your child will attend (you may choose several)', ['23 December', '24 December', '28 December', '29 December', '30 December', '31 December'], true);

  S('2. Family details', '');
  T('Mother / Father / Legal guardian 1: full name', true);
  T('Mother / Father / Legal guardian 1: ID number (DNI / NIE)', true);
  T('Mother / Father / Legal guardian 1: phone number', true);
  T('Mother / Father / Legal guardian 1: email address', true);
  T('Mother / Father / Legal guardian 2: full name', false);
  T('Mother / Father / Legal guardian 2: ID number (DNI / NIE)', false);
  T('Mother / Father / Legal guardian 2: phone number', false);

  S('3. Important information about the child', 'So that we can offer appropriate, personalised care, we need to know a few details.');
  P('Does your child have any food allergy or intolerance?', true);
  P('Does your child have any medication allergy?', true);
  P('Does your child have any medical condition we should know about?', true);
  P('Is your child taking any medication? Please state which one and the necessary instructions.', true);
  P('Does your child have any specific support or care needs?', true);
  P('Is there any other relevant information we should know?', true);
  P('Additional comments', false);

  S('4. Emergency contact and collection', 'Emergency contact person (if not the legal guardians). The child may only leave the premises accompanied by their legal guardians or by persons expressly authorised.');
  T('Emergency contact: full name', false);
  T('Emergency contact: phone number', false);
  T('Emergency contact: relationship to the child', false);
  T('Authorised person to collect the child 1: full name / ID number / phone number', true);
  T('Authorised person to collect the child 2: full name / ID number / phone number', false);
  T('Authorised person to collect the child 3: full name / ID number / phone number', false);

  S('5. Image authorisation', 'I authorise Asociación Latidoo to take photographs and videos of my child during the Christmas Camp and to use them to promote its activities on social media, the website and other Latidoo communication channels. This authorisation is voluntary and does not condition the child\'s participation in the camp. It may be withdrawn at any time by written notice to the organisation.');
  R('Select one option only', ['YES, I AUTHORISE the taking and publication of photographs and videos in which my child\'s face appears.', 'YES, I AUTHORISE WITH CONDITIONS the taking and publication of photographs and videos of my child, provided that their face and any element that could identify them does not appear.', 'NO, I DO NOT AUTHORISE the taking or publication of images or videos of my child for promotional purposes.'], true);

  S('6. Acceptance of rules and conditions', 'As parent or legal guardian, I declare that: the information provided is true and up to date; I have informed the organisation of any medical circumstance, allergy or specific need relevant to my child\'s care; I authorise my child\'s participation in the activities scheduled during the camp; I undertake to respect the set arrival and departure times and to report any relevant change to the information provided. Safety and liability: I am aware that children\'s activities may involve risks inherent to their development and that, despite the prevention, supervision and safety measures adopted by the organisation, accidents or injuries may occur. Asociación Latidoo undertakes to adopt the reasonable prevention, supervision and care measures required during the activities. The organisation will not assume liability for injuries or accidents that are not the consequence of a breach of its legal obligations or of its duty of care. This declaration does not waive any rights that the child or their legal representatives may hold by law. In case of accident or emergency, I authorise the organisation to contact the health services and to provide any necessary medical care, trying to contact the legal guardians beforehand whenever circumstances allow.');
  C('I accept the rules and conditions above', ['I accept the rules and conditions'], true);

  S('7. Data protection', 'The personal data provided will be processed by Asociación Latidoo solely to manage the registration, organisation, care and safety of the participants in the camp. The data will not be transferred to third parties unless required by law or where necessary to handle an emergency. Data subjects may exercise their rights of access, rectification, erasure, objection and any other rights recognised by current regulations by writing to the organisation.');

  S('8. Signature and confirmation', 'I declare that I have read and accepted the conditions above.');
  T('Name of the parent or legal guardian', true);
  T('ID number (DNI / NIE)', true);
  D('Date', true);
  T('Signature (type your full name)', true);

  Logger.log('Edit: ' + form.getEditUrl());
  Logger.log('Link: ' + form.getPublishedUrl());
}
