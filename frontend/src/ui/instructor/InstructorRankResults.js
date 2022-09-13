import React from 'react'
import { useSelector } from 'react-redux'

export const RankTable = () => {
  const { rankData } = useSelector( state => state.ranks );
  return (
    <table className="table">
      <thead>
      <tr>
        <th style={{ width: 100 }}>Name</th>
        <th style={{ width: 150 }}>Idea</th>
        <th style={{ width: 150 }}>Ranking</th>
      </tr>
      </thead>
      <tbody>
      {rankData && rankData.map( rank =>
        <tr key={rank.id}>
          {/*<td>{profile.ProfileName}</td>*/}
          {/*<td>{idea.ideaDescription}</td>*/}
          <td>{rank.rankValue}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}