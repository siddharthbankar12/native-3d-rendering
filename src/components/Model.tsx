import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_0_1: THREE.Mesh;
    mesh_0_2: THREE.Mesh;
    mesh_0_3: THREE.Mesh;
    mesh_0_4: THREE.Mesh;
    mesh_0_5: THREE.Mesh;
    mesh_0_6: THREE.Mesh;
    mesh_0_7: THREE.Mesh;
    mesh_0_8: THREE.Mesh;
    mesh_0_9: THREE.Mesh;
    mesh_0_10: THREE.Mesh;
    mesh_0_11: THREE.Mesh;
    mesh_0_12: THREE.Mesh;
    mesh_0_13: THREE.Mesh;
    mesh_0_14: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_1_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_2_1: THREE.Mesh;
    mesh_2_2: THREE.Mesh;
    mesh_2_3: THREE.Mesh;
    mesh_3: THREE.Mesh;
    mesh_3_1: THREE.Mesh;
    mesh_3_2: THREE.Mesh;
    mesh_3_3: THREE.Mesh;
    little_by_1002: THREE.Mesh;
    Tongue: THREE.Mesh;
    mesh_6: THREE.Mesh;
    mesh_6_1: THREE.Mesh;
    mesh_7: THREE.Mesh;
    mesh_7_1: THREE.Mesh;
    Wolf3D_Hair: THREE.Mesh;
  };
  materials: {
    Ga_Skin_Body: THREE.MeshStandardMaterial;
    Sole: THREE.MeshStandardMaterial;
    AnklePadding: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    Sidewalls: THREE.MeshStandardMaterial;
    Ties: THREE.MeshStandardMaterial;
    Socks: THREE.MeshStandardMaterial;
    SideWallTrim: THREE.MeshStandardMaterial;
    SideWallStripe: THREE.MeshStandardMaterial;
    ToeCap: THREE.MeshStandardMaterial;
    TieEdge: THREE.MeshStandardMaterial;
    TongueEdge: THREE.MeshStandardMaterial;
    AnklePaddingStripe: THREE.MeshStandardMaterial;
    SockStripe1: THREE.MeshStandardMaterial;
    SockStripe2: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    Cornea: THREE.MeshStandardMaterial;
    Pupils: THREE.MeshStandardMaterial;
    Sclera: THREE.MeshStandardMaterial;
    Irises: THREE.MeshStandardMaterial;
    GoZMesh_Default_Material: THREE.MeshStandardMaterial;
    Teeth: THREE.MeshStandardMaterial;
    Mouth: THREE.MeshStandardMaterial;
    ["Wolf3D_Hair.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const gltf = useGLTF(require("../assets/Model.glb")) as unknown as GLTFResult;

  const { nodes, materials } = gltf;

  console.log("Model nodes:", Object.keys(nodes || {}));
  console.log("Model materials:", Object.keys(materials || {}));
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.little_by_1002.geometry}
        material={materials.GoZMesh_Default_Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue.geometry}
        material={materials.Ga_Skin_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials["Wolf3D_Hair.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={materials.Ga_Skin_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_1.geometry}
        material={materials.Sole}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_2.geometry}
        material={materials.AnklePadding}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_3.geometry}
        material={materials.Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_4.geometry}
        material={materials.Sidewalls}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_5.geometry}
        material={materials.Ties}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_6.geometry}
        material={materials.Socks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_7.geometry}
        material={materials.SideWallTrim}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_8.geometry}
        material={materials.SideWallStripe}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_9.geometry}
        material={materials.ToeCap}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_10.geometry}
        material={materials.TieEdge}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_11.geometry}
        material={materials.TongueEdge}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_12.geometry}
        material={materials.AnklePaddingStripe}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_13.geometry}
        material={materials.SockStripe1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_14.geometry}
        material={materials.SockStripe2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2.geometry}
        material={materials.Cornea}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2_1.geometry}
        material={materials.Pupils}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2_2.geometry}
        material={materials.Sclera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2_3.geometry}
        material={materials.Irises}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3.geometry}
        material={materials.Cornea}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3_1.geometry}
        material={materials.Pupils}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3_2.geometry}
        material={materials.Sclera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3_3.geometry}
        material={materials.Irises}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_6.geometry}
        material={materials.Teeth}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_6_1.geometry}
        material={materials.Mouth}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_7.geometry}
        material={materials.Teeth}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_7_1.geometry}
        material={materials.Mouth}
      />
    </group>
  );
}

useGLTF.preload(require("../assets/Model.glb"));
