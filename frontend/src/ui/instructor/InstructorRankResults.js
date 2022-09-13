import React from 'react'




export const RankTable = ({profiles, ideas, ranks}) => {
  console.log("ranks",ranks)
  console.log("profiles", profiles)
  return (
    <table className="table">
      <thead>
      <tr>
        <th style={{ width: 100 }}></th>
        {ideas.map(idea =>(<th style={{ width: 100 }}>{idea.ideaDescription}</th>))}
      </tr>
      </thead>
      <tbody>
      {profiles.map( profile =>
        <tr key={profile.profileId}>
          <td>{profile.profileName}</td>
          {ideas.map(idea => {
            return( <td>
              {ranks.filter(rank => rank.rankIdeaId === idea.ideaId && rank.rankProfileId === profile.profileId)[0]?.rankValue}
            </td>)
          })}

          {/*<td>{rank.rankValue}</td>*/}
        </tr>
      )}
      </tbody>
    </table>
  )
}