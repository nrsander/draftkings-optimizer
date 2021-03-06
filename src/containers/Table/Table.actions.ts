export const GET_PLAYERS_SUCCEEDED = 'GET_PLAYERS_SUCCEEDED';
export const GET_PLAYERS_FAILED = 'GET_PLAYERS_FAILED';
export const LOADING_PLAYERS = 'LOADING_PLAYERS';
export const SELECT_PLAYER = 'SELECT_PLAYER';
export const LOCK_PLAYERS = 'LOCK_PLAYERS';
export const NEXT = 'NEXT';
export const PREVIOUS = 'PREVIOUS';
export const SET_PLAYER_EXPOSURE = 'SET_PLAYER_EXPOSURE';
export const SET_PLAYER_PROJECTED_OWNERSHIP = 'SET_PLAYER_PROJECTED_OWNERSHIP';

export const setPlayerExposure = (playerId, value) => ({
	type: SET_PLAYER_EXPOSURE,
	playerId,
	value,
});

export const setPlayerProjectedOwnership = (playerId, value) => ({
	type: SET_PLAYER_PROJECTED_OWNERSHIP,
	playerId,
	value,
});

export const lockPlayer = (e: React.ChangeEvent<HTMLInputElement>) => ({
	type: LOCK_PLAYERS,
	payload: e.currentTarget,
});

export const nextPage = () => ({
	type: NEXT,
});

export const previousPage = () => ({
	type: PREVIOUS,
});
