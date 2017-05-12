export const cardsUpdate = (cards) => {
  return {
    type: 'CARDS_UPDATE',
    cards,
  }
}

export const cardSelect = (card) => {
  return {
    type: 'CARD_SELECT',
    card,
  }
}

export const dStatsUpdate = (charClass, count) => {
  return {
    type: 'DSTATS_UPDATE',
    charClass,
    count,
  }
}