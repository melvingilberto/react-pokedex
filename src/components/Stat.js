import React from 'react'

export const Stat = ({ item }) => {
    return (
        <li className="pokemon-stat">
          <span className="stat-name"><b>{item.stat.name}: </b></span>
          <span>{item.base_stat}</span>
        </li>
    )
}
