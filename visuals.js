/* Lightweight, local SVG illustrations. No external font or icon requests. */
(function(){
 const paths={
 chat:'<path d="M5 5h22v14H15l-7 6v-6H5z"/><path d="M11 10h10m-10 4h7"/>',
 sound:'<path d="M5 13h5l7-6v22l-7-6H5z"/><path d="M22 12q7 6 0 12m4-17q12 11 0 22"/>',
 wave:'<path d="M4 18h4l3-10 5 21 5-24 4 19 3-6h4"/><path d="M5 31h26"/>',
 ear:'<path d="M11 13a9 9 0 0 1 18 0c0 8-9 8-9 14a5 5 0 0 1-10 0"/><path d="M16 14a4 4 0 0 1 8 0c0 4-6 4-6 8"/>',
 brain:'<path d="M17 7c-6-6-12 1-9 6-7 2-6 12 0 13-1 7 6 9 9 4V7zm2 0c6-6 12 1 9 6 7 2 6 12 0 13 1 7-6 9-9 4V7z"/><path d="M8 13l5 3m15-3-5 3M8 26l5-4m15 4-5-4"/>',
 tree:'<path d="M18 10v8M7 25v-7h22v7"/><path d="M13 3h10v8H13zM3 25h8v7H3zm22 0h8v7h-8z"/>',
 puzzle:'<path d="M5 6h10c-1 5 7 5 6 0h10v10c-5-1-5 7 0 6v9H21c1-5-7-5-6 0H5v-9c5 1 5-7 0-6z"/><path d="M11 11h2m11 14h2"/>',
 book:'<path d="M18 8C13 4 7 4 3 6v24c6-2 10-2 15 1 5-3 9-3 15-1V6c-4-2-10-2-15 2v23"/><path d="M8 12l5 1m10 0 5-1M8 18l5 1m10 0 5-1"/>',
 link:'<path d="m15 12 4-4a7 7 0 0 1 10 10l-5 5m-3 1-4 4A7 7 0 0 1 7 18l5-5"/><path d="m12 24 12-12"/>',
 globe:'<circle cx="18" cy="18" r="14"/><path d="M4 18h28M18 4c-9 8-9 20 0 28 9-8 9-20 0-28zM7 10h22M7 26h22"/>',
 heart:'<path d="M18 30 6 18C-3 8 11-2 18 9 25-2 39 8 30 18z"/><path d="m8 17 5 0 3-5 4 10 3-5h5"/>',
 clock:'<circle cx="18" cy="18" r="13"/><path d="M18 9v10l7 4M10 3 5 7m21-4 5 4"/>',
 pin:'<path d="M18 32S7 21 7 13a11 11 0 0 1 22 0c0 8-11 19-11 19z"/><circle cx="18" cy="13" r="4"/>',
 person:'<circle cx="18" cy="9" r="5"/><path d="M7 32v-5a11 11 0 0 1 22 0v5M10 24h16"/>',
 layers:'<path d="m3 11 15-8 15 8-15 8z"/><path d="m3 18 15 8 15-8M3 25l15 8 15-8"/>',
 compass:'<circle cx="18" cy="18" r="14"/><path d="m24 11-4 10-9 4 4-10z"/>',
 feather:'<path d="M6 31 25 7M10 27C5 8 25-2 31 5c5 6-6 25-21 22z"/><path d="m13 19 8 0m-3-7 0 7"/>',
 check:'<path d="M27 5h5v27H5V5h5"/><path d="M13 3h11v6H13zm-2 18 5 5 10-12"/>',
 code:'<path d="m12 9-8 9 8 9m12-18 8 9-8 9M21 5l-6 26"/><path d="M4 33h28"/>',
 scales:'<path d="M18 4v28M7 32h22M5 11h26M9 11 3 23h12zm18 0-6 12h12z"/><path d="M3 23c2 5 10 5 12 0m6 0c2 5 10 5 12 0"/>'
 };
 const hues=['blue','violet','teal','orange','rose','green','amber','indigo'];
 function choose(t,l){t=t.toLowerCase();if(/arter|blood|venous|vessel|epistaxis|bleed|haem|hemorrh|haemorr|hypertension/.test(t))return 'heart';if(/nerve|innerv|sensory|motor|plexus|hypogloss|vagus|taste|gag|parasym|sympathetic/.test(t))return 'brain';if(/movement|flexion|extension|rotation|supination|pronation|inversion|eversion|abduct|adduct|protract|retract|elevation|depression|excursion/.test(t))return 'wave';if(/direction|position|plane|medial|lateral|proximal|distal|superior|inferior|anterior|posterior|deep|superficial|ipsi|contra/.test(t))return 'compass';if(/joint|disc|capsule|ligament|tmj|condyl|pterygoid|masseter|temporalis|muscle|mastication/.test(t))return 'layers';if(/sinus|nasal|nose|concha|meatus|sept|choana|nares|palate/.test(t))return 'tree';if(/pharynx|pharyngeal|tonsil|tongue|papilla|frenulum|lingual/.test(t))return 'chat';if(/oesoph|swallow|bolus|peristal|penetration|aspiration/.test(t))return 'link';if(/voice|speech|articul|hoarseness/.test(t))return 'sound';return ['compass','tree','heart','layers','chat','link'][l-1]||'book';}

 window.StudyVisuals={icon(term,lecture=1,small=false){const name=choose(term,lecture);const hue=hues[(Object.keys(paths).indexOf(name)+lecture)%hues.length];return `<span class="concept-icon icon-${hue}${small?' icon-small':''}" aria-hidden="true"><svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${paths[name]}</svg></span>`;},lectureIcons:['compass','tree','heart','layers','chat','link']};
})();
