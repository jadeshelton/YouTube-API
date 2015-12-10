/*$(function(){

	$("#search-term").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
		});
});

function getRequest(searchTerm){
		var params = {
			q: searchTerm,
			part: 'snippet',
			key: 'AIzaSyCzVPRJ1vYhkCQim0a0KmyFY9pKtBINDgw'
		};
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data) {
			showResults(data.items);
	});
}


function showResults(results){
	$.each(results, function(index, item){
		$('#search-results').append('<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img class="thumbnail" style="padding: 1em" height="180px" width="321px" title="' + item.snippet.title + '" src="' + item.snippet.thumbnails.medium.url + '""></a>');
		console.log(item);
	});
}

*/

$(function(){

	$("#search-term").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
		});
});

function getRequest(searchTerm){
		var params = {
			q: searchTerm,
			part: 'snippet',
			key: 'AIzaSyCzVPRJ1vYhkCQim0a0KmyFY9pKtBINDgw',
			maxResults: 10
		};
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data) {
			showResults(data.items);
	});
}


function showResults(results){
	$.each(results, function(index, item){
		$('#search-results').append('<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img class="thumbnail" style="padding: 1em" height="180px" width="321px" title="' + item.snippet.title + '" src="' + item.snippet.thumbnails.medium.url + '""></a>');
		console.log(item);
	});
}
