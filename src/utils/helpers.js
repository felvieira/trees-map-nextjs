import { areaColors } from "styles/colors";

export const convertHexToRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');
    
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }    
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const getCenterOfPolygon = function (arr) {
  var twoTimesSignedArea = 0;
  var cxTimes6SignedArea = 0;
  var cyTimes6SignedArea = 0;

  var length = arr.length;

  var x = function (i) {
    return arr[i % length][0];
  };
  var y = function (i) {
    return arr[i % length][1];
  };

  for (var i = 0; i < arr.length; i++) {
    var twoSA = x(i) * y(i + 1) - x(i + 1) * y(i);
    twoTimesSignedArea += twoSA;
    cxTimes6SignedArea += (x(i) + x(i + 1)) * twoSA;
    cyTimes6SignedArea += (y(i) + y(i + 1)) * twoSA;
  }
  var sixSignedArea = 3 * twoTimesSignedArea;
  return [
    cxTimes6SignedArea / sixSignedArea,
    cyTimes6SignedArea / sixSignedArea,
  ];
};

export const getPopulation = (arr, id, year) =>
  arr[id - 1].population.filter((pop) => pop.ano === year)[0].populacao;

export const getIconMarkerByPopulation = (pop) => {
  pop = parseInt(pop);
  switch (true) {
    case pop <= 8000:
      return {
        src: "./img/pop7k-8k.png",
        size: "70px",
      };
    case pop <= 11000:
      return {
        src: "./img/pop8k-11k.png",
        size: "60px",
      };
    case pop <= 13000:
      return {
        src: "./img/pop11k-13k.png",
        size: "70px",
      };
    case pop <= 18000:
      return {
        src: "./img/pop13k-18k.png",
        size: "90px",
      };
    case pop <= 21000:
      return {
        src: "./img/pop18k-21k.png",
        size: "140px",
      };
    default:
      return {
        src: "./img/pop18k-21k.png",
        size: "130px",
      };
  }
};

export const styledMapFn = (i) => {
  return {
    id: `style-map-${i}`,
    type: "fill",
    paint: {
      "fill-color": areaColors[i],
      "fill-opacity": 1,
    },
  };
};
