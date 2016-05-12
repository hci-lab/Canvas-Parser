var Area, Axes, Background, Canvas_Geometry, Canvas_Parse, Diamond, Line, Picture, Point, Text, Tooltip,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Canvas_Geometry = (function() {
  function Canvas_Geometry() {}

  return Canvas_Geometry;

})();

Line = (function(superClass) {
  extend(Line, superClass);

  function Line() {
    return Line.__super__.constructor.apply(this, arguments);
  }

  return Line;

})(Canvas_Geometry);

Line.prototype.draw = function(obj) {
  var color, i, l, len, results, width;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    color = i.color === null || i.color === void 0 ? "#FF0000" : i.color;
    width = i.width === null || i.width === void 0 ? 1 : i.width;
    context.beginPath();
    context.moveTo(i.startX, i.startY);
    context.lineTo(i.endX, i.endY);
    context.strokeStyle = color;
    context.lineWidth = width;
    context.stroke();
    context.closePath();
    context.strokeStyle = "#000000";
    results.push(context.lineWidth = 1);
  }
  return results;
};

Area = (function(superClass) {
  extend(Area, superClass);

  function Area() {
    return Area.__super__.constructor.apply(this, arguments);
  }

  return Area;

})(Canvas_Geometry);

Area.prototype.draw = function(obj) {
  var color, fillColor, i, k, l, len, len1, m, ref, results;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    color = i.color === null || i.color === void 0 ? "#FF0000" : i.color;
    fillColor = i.fillColor === null || i.fillColor === void 0 ? "#ffffff" : i.fillColor;
    context.beginPath();
    context.lineCap = "round";
    context.moveTo(i.points[0][0], i.height - i.margin);
    ref = i.points;
    for (m = 0, len1 = ref.length; m < len1; m++) {
      k = ref[m];
      context.lineTo(k[0], k[1]);
    }
    context.lineTo(i.points[i.points.length - 1][0], i.height - i.margin);
    context.fillStyle = fillColor;
    context.fill();
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    results.push(context.fillStyle = "#000000");
  }
  return results;
};

Background = (function(superClass) {
  extend(Background, superClass);

  function Background() {
    return Background.__super__.constructor.apply(this, arguments);
  }

  return Background;

})(Canvas_Geometry);

Background.prototype.draw = function(value) {
  var url;
  url = "http";
  if (value.indexOf(url) > -1) {
    canvas.style.backgroundImage = 'url(' + value + ')';
    return canvas.style.backgroundSize = '100% 100%';
  } else {
    return canvas.style.backgroundColor = value;
  }
};

Diamond = (function(superClass) {
  extend(Diamond, superClass);

  function Diamond() {
    return Diamond.__super__.constructor.apply(this, arguments);
  }

  return Diamond;

})(Canvas_Geometry);

Diamond.prototype.draw = function(obj) {
  var color, cursorx, cursory, i, l, len, results;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    color = i.color === null || i.color === void 0 ? "#FF0000" : i.color;
    cursorx = 4;
    cursory = 4;
    context.beginPath();
    context.moveTo(i.x, i.y - cursory);
    context.lineTo(i.x + cursorx, i.y);
    context.lineTo(i.x, i.y + cursory);
    context.lineTo(i.x - cursorx, i.y);
    context.lineTo(i.x, i.y - cursory);
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    results.push(context.fillStyle = "#000000");
  }
  return results;
};

Point = (function(superClass) {
  extend(Point, superClass);

  function Point() {
    return Point.__super__.constructor.apply(this, arguments);
  }

  return Point;

})(Canvas_Geometry);

Point.prototype.draw = function(obj) {
  var anticlockwise, color, endAngle, fillColor, i, l, len, linewidth, radius, results, startAngle;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    color = i.color === null || i.color === void 0 ? "#000000" : i.color;
    fillColor = i.fillColor === null || i.fillColor === void 0 ? "#ffffff" : i.fillColor;
    linewidth = i.linewidth === null || i.linewidth === void 0 ? 1 : i.linewidth;
    radius = i.radius === null || i.radius === void 0 ? 7 : i.radius;
    anticlockwise = i.anticlockwise === null || i.anticlockwise === void 0 ? false : i.anticlockwise;
    startAngle = i.startAngle === null || i.startAngle === void 0 ? 0 : i.startAngle;
    endAngle = i.endAngle === null || i.endAngle === void 0 ? 360 : i.endAngle;
    context.beginPath();
    context.arc(i.x, i.y, radius, (Math.PI / 180) * startAngle, (Math.PI / 180) * endAngle, anticlockwise);
    context.fillStyle = fillColor;
    context.fill();
    context.lineWidth = linewidth;
    context.strokeStyle = color;
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    results.push(context.fillStyle = "#000000");
  }
  return results;
};

Picture = (function(superClass) {
  extend(Picture, superClass);

  function Picture() {
    return Picture.__super__.constructor.apply(this, arguments);
  }

  return Picture;

})(Canvas_Geometry);

Picture.prototype.draw = function(obj) {
  var i, l, len, results;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    results.push(Picture.Process(i));
  }
  return results;
};

Picture.prototype.Process = function(obj) {
  var image;
  image = new Image();
  image.src = obj.src;
  return image.onload = function() {
    var imageHeight, imageWidth;
    imageWidth = image.width;
    imageHeight = image.height;
    context.save();
    context.translate(obj.x - (imageHeight / 2), obj.y - (imageWidth / 2));
    context.drawImage(image, 0, 0);
    return context.restore();
  };
};

Text = (function(superClass) {
  extend(Text, superClass);

  function Text() {
    return Text.__super__.constructor.apply(this, arguments);
  }

  return Text;

})(Canvas_Geometry);

Text.prototype.draw = function(obj) {
  var i, l, len, results;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    context.font = "15px Arial";
    results.push(context.fillText(i.text, i.x, i.y));
  }
  return results;
};

Axes = (function(superClass) {
  extend(Axes, superClass);

  function Axes() {
    return Axes.__super__.constructor.apply(this, arguments);
  }

  return Axes;

})(Canvas_Geometry);

Axes.prototype.draw = function(obj) {
  var currentX, currentY, grid, i, j, l, len, orientation, results;
  results = [];
  for (l = 0, len = obj.length; l < len; l++) {
    i = obj[l];
    grid = i.grid === null || i.grid === void 0 ? false : i.grid;
    if (i.type === "x") {
      orientation = i.orientation === null || i.orientation === void 0 ? "bottom" : i.orientation;
    } else {
      orientation = i.orientation === null || i.orientation === void 0 ? "left" : i.orientation;
    }
    context.beginPath();
    if (i.type === "x") {
      context.strokeStyle = "#000000";
      if (i.orientation === "top") {
        context.moveTo(i.margin, i.margin);
        context.lineTo(i.width - i.margin, i.margin);
      } else {
        context.moveTo(i.margin, i.height - i.margin);
        context.lineTo(i.width - i.margin, i.height - i.margin);
      }
      context.stroke();
      context.strokeStyle = "rgba(128, 128, 255, 0.5)";
      j = 0;
      while (j <= i.values.length) {
        currentX = i.margin + j / i.values.length * (i.width - (2 * i.margin));
        if (i.grid === true) {
          context.moveTo(currentX, i.margin);
          context.lineTo(currentX, i.height - i.margin);
        }
        if (i.orientation === "top") {
          context.fillText((i.min + ((i.max - i.min) / i.values.length) * j).toFixed(2), currentX - 3, i.margin / 2);
        } else {
          context.fillText((i.min + ((i.max - i.min) / i.values.length) * j).toFixed(2), currentX - 3, (i.height - i.margin) + i.margin / 2);
        }
        j++;
      }
      context.stroke();
      context.strokeStyle = "#000000";
    }
    if (i.type === "y") {
      if (i.orientation === "right") {
        context.moveTo(i.width - i.margin, i.margin);
        context.lineTo(i.width - i.margin, i.height - i.margin);
      } else {
        context.moveTo(i.margin, i.margin);
        context.lineTo(i.margin, i.height - i.margin);
      }
      context.stroke();
      context.strokeStyle = "rgba(128, 128, 255, 0.5)";
      j = 0;
      while (j <= i.values.length) {
        currentY = i.margin + j / i.values.length * (i.height - (2 * i.margin));
        if (i.grid === true) {
          context.moveTo(i.width - i.margin, currentY);
          context.lineTo(i.margin, currentY);
        }
        if (i.orientation === "right") {
          context.fillText((i.min + ((i.max - i.min) / i.values.length) * (i.values.length - j)).toFixed(2), 10 + i.width - i.margin, currentY + 4);
        } else {
          context.fillText((i.min + ((i.max - i.min) / i.values.length) * (i.values.length - j)).toFixed(2), 10, currentY + 4);
        }
        j++;
      }
      context.stroke();
      results.push(context.strokeStyle = "#000000");
    } else {
      results.push(void 0);
    }
  }
  return results;
};

Tooltip = (function() {
  function Tooltip(obj1) {
    this.obj = obj1;
  }

  return Tooltip;

})();

Tooltip.prototype.draw = function(value) {};

Tooltip.prototype.mouseover = function() {};

Tooltip.prototype.mousemove = function() {};

Tooltip.prototype.mouseout = function() {};

Tooltip.prototype.getMousePos = function(canvas, evt) {};

Canvas_Parse = function(obj) {
  var key, results, value;
  window.canvas = document.getElementById(obj.id);
  window.context = canvas.getContext("2d");
  window.Line = new Line();
  window.Point = new Point();
  window.Picture = new Picture();
  window.Axes = new Axes();
  window.Diamond = new Diamond();
  window.Background = new Background();
  window.Tooltip = new Tooltip(obj);
  window.Area = new Area();
  window.Text = new Text();
  results = [];
  for (key in obj) {
    value = obj[key];
    if (key === "id") {
      continue;
    } else {
      results.push(window[key]["draw"](value));
    }
  }
  return results;
};

//# sourceMappingURL=Canvas-Parser.js.map
