const sharp = require("sharp");

exports.handler = async function (event, context) {
  const svgWithText = Buffer.from(
    `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <style>
      .small { font: italic 13px sans-serif; }
      .heavy { font: bold 30px sans-serif; }
  
      /* Note that the color of the text is set with the    *
       * fill property, the color property is for HTML only */
      .Rrrrr { font: italic 40px serif; fill: red; }
    </style>
  
    <text x="20" y="35" class="small">My</text>
    <text x="40" y="35" class="heavy">cat</text>
    <text x="55" y="55" class="small">is</text>
    <text x="65" y="55" class="Rrrrr">Grumpy!</text>
  </svg>`
  );

  const res = (await sharp(svgWithText).png().toBuffer()).toString("base64");

  return {
    statusCode: 200,
    body: res,
    isBase64Encoded: true,
  };
};