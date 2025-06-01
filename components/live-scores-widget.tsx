"use client"

export function LiveScoresWidget() {
  return (
    <div
      id="wg-api-football-games"
      data-host="v3.football.api-sports.io"
      data-key="9f82f2d444f352a223167170b15b6322"
      data-date=""
      data-league=""
      data-season=""
      data-theme=""
      data-refresh="15"
      data-show-toolbar="true"
      data-show-errors="false"
      data-show-logos="false"
      data-modal-game="true"
      data-modal-standings="true"
      data-modal-show-logos="true"
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}
    />
  )
}
