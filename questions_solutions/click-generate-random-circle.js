const circleCoordinates = [];


// the function check & tell about the circles' positioning 
function isIntersectingOrNot(x1, y1, r1, x2, y2, r2) {
    let distanceBwtweenCenters = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

    const sumOfRadiuses = r1 + r2;

    if (distanceBwtweenCenters <= r1 - r2) {
        console.log("Circle B is inside A");
    } else if (distanceBwtweenCenters <= r2 - r1) {
        console.log("Circle A is inside B");
    } else if (distanceBwtweenCenters < sumOfRadiuses) {
        console.log("Circle intersect to each other");
    } else if (distanceBwtweenCenters === sumOfRadiuses) {
        console.log("Circle touch to each other");
    } else {
        console.log("Circle not touch to each other");
    }
}


// Handling DOM for click event to generate circles
document.addEventListener("click", (e) => {
    
    const totalCirclesInTheScreen = document.querySelectorAll(".circle");
    if (totalCirclesInTheScreen.length === 2) {
        totalCirclesInTheScreen.forEach((circleElement) => {
            document.body.removeChild(circleElement);
            circleCoordinates.pop();
        });
    }

    const x = e.clientX;
    const y = e.clientY;

    const minRadius = 50;
    const maxRadius = 300;
    const radius = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);

    circleCoordinates.push({ x, y, radius });
    

    const circle = document.createElement("div");
    circle.classList.add("circle");
    
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.style.width = `${2 * radius}px`;
    circle.style.height = `${2 * radius}px`;
    
    document.body.appendChild(circle);

    if (circleCoordinates.length === 2) {
        isIntersectingOrNot(
          circleCoordinates[0].x,
          circleCoordinates[0].y,
          circleCoordinates[0].radius,
          circleCoordinates[1].x,
          circleCoordinates[1].y,
          circleCoordinates[1].radius
        );
    }
});

