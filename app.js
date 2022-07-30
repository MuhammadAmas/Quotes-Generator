
fetch(`https://type.fit/api/quotes`).
    then(response => {
        return response.json()
    }).
    then(data => {
        quotes = data;

        document.querySelector('.quote-generator-btn').addEventListener('click', generateQuote);

        function generateQuote() {
            let random = Math.floor(Math.random() * 1500);
            if (quotes[random].author === null) {
                quotes[random].author = '-  Anonymous';
            }

            const quoteDiv = document.getElementById('quote-div');
            // Create div element
            const row = document.createElement('div');
            // Insert cols
            row.innerHTML = `
            <div class="quote" id="quote">
                <p id="text" class="text">${quotes[random].text}</p>
                <p id="author" class="author">${quotes[random].author}</p>
            </div>
            `;
            console.log('**', quoteDiv)
            quoteDiv.appendChild(row);
            // document.getElementById('text').innerHTML = quotes[random].text;
            // document.getElementById('author').innerHTML = quotes[random].author;
        }
    }).
    catch(err => {
        console.log(err)
    });


