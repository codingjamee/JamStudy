var name = 'Jane';
var letter = 'Dear '+name+' \n\
\n\
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra ex in nunc finibus, et bibendum risus ornare. Vestibulum et laoreet risus. Morbi eu venenatis dui. Nunc scelerisque blandit pellentesque. Aenean ornare nibh vitae purus eleifend, ut eleifend ipsum vestibulum. Fusce lacinia viverra elit nec vehicula. Ut consequat ex at felis commodo, at posuere sapien viverra. Donec eu justo vitae ex pulvinar efficitur et vitae magna. '+name+' Suspendisse consequat efficitur dignissim. Aliquam eget dui quis nunc interdum scelerisque sagittis vitae eros. Vivamus sed varius risus. Aliquam erat purus, vestibulum ac eros sit amet, egestas imperdiet dui. Etiam orci arcu, facilisis id porta id, facilisis at mi. Pellentesque accumsan sapien sit amet elit  \n\
\n\ consequat, nec ultrices est condimentum. Suspendisse cursus semper velit, ac auctor dolor mollis at. Duis tincidunt ac ex ut fringilla. Donec eleifend dignissim mi, posuere blandit arcu consectetur sed. Nam '+name+' vestibulum interdum arcu, at ornare neque imperdiet ac. Nunc placerat sollicitudin nibh. Etiam interdum purus mauris, a mollis metus pharetra sit amet. Sed est justo, sollicitudin a aliquet quis, gravida ac turpis. Suspendisse at posuere magna. Sed velit nisi, euismod nec lorem non, Jane placerat facilisis eros. Curabitur ut ante ornare, luctus massa in, convallis nunc. Donec quis ligula.' +name;
console.log(letter);

var letter = `Dear ${name} \n\n
\n\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra ex in nunc finibus, et bibendum risus ornare. Vestibulum et laoreet risus. Morbi eu venenatis dui. Nunc scelerisque blandit pellentesque. Aenean ornare nibh vitae purus eleifend, ut eleifend ipsum vestibulum. Fusce lacinia viverra elit nec vehicula. Ut consequat ex at felis commodo, at posuere sapien viverra. Donec eu justo vitae ex pulvinar efficitur et vitae magna. ${name} Suspendisse consequat efficitur dignissim. Aliquam eget dui quis nunc interdum scelerisque sagittis vitae eros. Vivamus sed varius risus. Aliquam erat purus, vestibulum ac eros sit amet, egestas imperdiet dui. Etiam orci arcu, facilisis id porta id, facilisis at mi. Pellentesque accumsan sapien sit amet elit  \n\n
\n\n consequat, nec ultrices est condimentum. Suspendisse cursus semper velit, ac auctor dolor mollis at. Duis tincidunt ac ex ut fringilla. Donec eleifend dignissim mi, posuere blandit arcu consectetur sed. Nam ${name} vestibulum interdum arcu,  \n
\n\n at ornare neque imperdiet ac. Nunc placerat sollicitudin ${1+1} nibh. Etiam interdum purus mauris, a mollis metus pharetra sit amet. Sed est justo, sollicitudin a aliquet quis, gravida ac turpis. Suspendisse at posuere magna. Sed velit nisi, euismod nec lorem non, Jane placerat facilisis eros. Curabitur ut ante ornare, luctus massa in, convallis nunc. Donec quis ligula.' ${name}`;

console.log(letter);
//???????????? ????????? ???????????? ??????
//` ???????????? ????????? ????????? ??????. ????????? ${??????}??? ??????
