import { Suspense, useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function Swarm({ count, mouse }) {
    const mesh = useRef()
    const light = useRef()
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])
    useFrame((state) => {
        // Makes the light follow the mouse
        // light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
        // Run through the randomized data to calculate some movement
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            // There is no sense or reason to any of this, just messing around with trigonometric functions
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)
            // particle.mx += (mouse.current[0] - particle.mx) * 0.01
            // particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
            // Update the dummy object
            dummy.position.set(
                (particle.mx / 20) * a + xFactor + Math.cos((t / 20) * factor) + (Math.sin(t * 1) * factor) / 20,
                (particle.my / 20) * b + yFactor + Math.sin((t / 20) * factor) + (Math.cos(t * 2) * factor) / 20,
                (particle.my / 20) * b + zFactor + Math.cos((t / 20) * factor) + (Math.sin(t * 3) * factor) / 20
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s, s, s)
            dummy.updateMatrix()
            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })
    return (
        <>
            <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronBufferGeometry attach="geometry" args={[0.2, 0]} />
                <meshPhongMaterial attach="material" color="#fff" />
            </instancedMesh>
        </>
    )
}

const WebGL = props => {
    const threeModelRef = useRef(null);
    const boxRef = useRef(null);

    const initThreeModel = useCallback(() => {
        const scene = new THREE.Scene();
        const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
        const material = new THREE.MeshBasicMaterial()

        material.color = new THREE.Color('#fff')
        const sphere = new THREE.Points(geometry, material)
        scene.add(sphere)
        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        scene.add(pointLight)
        const particelsGeometry = new THREE.BufferGeometry;
        const particlesCount = 5000;
        const positionArr = new Float32Array(particlesCount * 3);
        Array(particlesCount * 3).fill("").forEach((_, index) => {
            positionArr[index] = Math.random();
        })
        particelsGeometry.setAttribute('position', new THREE.BufferAttribute(positionArr, 3));
        const particalesMesh = new THREE.Points(particelsGeometry, material)
        //   scene.add(sphere, particalesMesh)
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        const clock = new THREE.Clock()
        const tick = () => {

            const elapsedTime = clock.getElapsedTime()

            // Update objects
            sphere.rotation.y = .5 * elapsedTime

            // Update Orbital Controls
            // controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 2;
        //   scene.add(camera)
        const renderer = new THREE.WebGLRenderer({
            canvas: threeModelRef.current
        })
        renderer.setClearColor('#422CCA')
        // renderer.setSize(sizes.width, sizes.height)
        // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // tick();
        // boxRef.current.position.x += 1;

    }, []);

    useEffect(() => {
        if (threeModelRef.current && typeof window !== undefined) {
            initThreeModel();
        }
    }, [])

    return <Canvas style={{ position: 'absolute' }} ref={threeModelRef} className="absolute">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
        <Swarm count={10000} />
    </Canvas>
}

export default WebGL;