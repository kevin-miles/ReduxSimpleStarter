export const selectBook = (book) => {
	//selectBook is an action creator
	//it returns an OBJECT with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book,
	};
};