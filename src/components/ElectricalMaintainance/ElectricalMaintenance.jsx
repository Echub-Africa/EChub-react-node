import React from 'react'
import styles from './electrical.module.css'

const ElectricalMaintenance = () => {
    const {Container,Landing} = styles
  return (
    <main className= {Container}>
        <section className= {Landing}>
            <div>
                <h5>Switch to Competence</h5>
                <h1>Fix all damaged unit, get certified artisans within minutes</h1>
                <ul>
                    <li>Power issues</li>
                    <li>installation and wiring </li>
                    <li>Repairs and replacment</li>
                    <li>Lighting and metering issues </li>
                </ul>
                <button type='button'>I want a technician now </button>
            </div>
        </section>
    </main>
  )
}

export default ElectricalMaintenance