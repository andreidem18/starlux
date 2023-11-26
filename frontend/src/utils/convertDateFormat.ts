const convertDateFormat = (dateString: string) => {
    if(!dateString) return;
    const date = new Date(dateString);
    const formated = date.toLocaleDateString(undefined, { 
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric',
    });
    return formated;
}

export default convertDateFormat;
