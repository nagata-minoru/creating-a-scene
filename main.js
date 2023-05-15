// THREE.jsをインポート
import * as THREE from "three";

// 即時実行関数を使って、スコープを分離
(() => {
  // 新しいシーンを作成
  const scene = new THREE.Scene();

  // パースペクティブカメラを作成（視野角75度、アスペクト比はウィンドウサイズに依存、描画開始距離0.1、描画終了距離1000）
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // WebGLレンダラーを作成
  const renderer = new THREE.WebGLRenderer();

  // レンダラーのサイズをウィンドウサイズに設定
  renderer.setSize(window.innerWidth, window.innerHeight);

  // レンダラーのDOM要素をbodyに追加
  document.body.appendChild(renderer.domElement);

  // 1x1x1の立方体のジオメトリ（形状）を作成
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // 緑色の基本的なマテリアルを作成
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // ジオメトリとマテリアルからメッシュ（立方体）を作成
  const cube = new THREE.Mesh(geometry, material);

  // 立方体をシーンに追加
  scene.add(cube);

  // カメラの位置をz軸上に移動（シーンの中心から見て手前に配置）
  camera.position.z = 5;

  // アニメーション実行
  (function animate() {
    // 次の描画フレームでanimateを再度実行
    requestAnimationFrame(animate);

    // 立方体をx軸とy軸で微小量回転
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // シーンとカメラを用いてレンダリング
    renderer.render(scene, camera);
  })();
})();
