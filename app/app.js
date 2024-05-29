// import { View, StyleSheet, Camera, Image } from "react-native";
// import { tf } from "@tensorflow/tfjs";
// import { facemesh } from "@tensorflow-models/face-landmarks-detection";

// const App = () => {
//   const [faceMesh, setFaceMesh] = useState(null);
//   const [videoRef, setVideoRef] = useState(null);
//   const [canvasRef, setCanvasRef] = useState(null);

//   useEffect(() => {
//     async function init() {
//       const faceMeshModel = await facemesh.load();
//       setFaceMesh(faceMeshModel);
//     }

//     init();
//   }, []);

//   useEffect(() => {
//     if (faceMesh && videoRef.current) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");

//       function detect() {
//         const video = videoRef.current;
//         const width = video.videoWidth;
//         const height = video.videoHeight;

//         canvas.width = width;
//         canvas.height = height;

//         ctx.drawImage(video, 0, 0, width, height);

//         const predictions = faceMesh.predict(video);

//         ctx.clearRect(0, 0, width, height);

//         predictions.forEach((prediction) => {
//           const {
//             faceLandmarks,
//             irisLandmarks,
//             mesh: { vertices },
//           } = prediction;

//           // Draw face landmarks.
//           ctx.fillStyle = "red";
//           ctx.beginPath();
//           vertices.forEach((vertex) => {
//             ctx.moveTo(vertex[0], vertex[1]);
//           });
//           ctx.closePath();
//           ctx.stroke();

//           // Draw iris landmarks.
//           ctx.fillStyle = "blue";
//           ctx.beginPath();
//           irisLandmarks.forEach((iris) => {
//             ctx.moveTo(iris[0], iris[1]);
//           });
//           ctx.closePath();
//           ctx.stroke();
//         });
//       }

//       setInterval(detect, 100);
//     }
//   }, [faceMesh, videoRef]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.camera}>
//         <Camera
//           ref={videoRef}
//           style={styles.video}
//           type="front"
//           aspectRatio={1}
//         />
//       </View>
//       <View style={styles.canvas}>
//         <canvas ref={canvasRef} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   camera: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   video: {
//     flex: 1,
//   },
//   canvas: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default App;
