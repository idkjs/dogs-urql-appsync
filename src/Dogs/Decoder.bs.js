'use strict';


function makeDog(data) {
  return /* record */[
          /* id */data.id,
          /* name */data.name,
          /* color */data.color,
          /* breed */data.breed,
          /* likes */data.likes,
          /* pats */data.pats,
          /* treats */data.treats,
          /* bellyscratches */data.bellyscratches,
          /* description */data.description,
          /* imageUrl */data.imageUrl
        ];
}

exports.makeDog = makeDog;
/* No side effect */
