(function($){
	'use strict';
	function htmlOutput(html) {
		// When this function is called, close the unordered list.
		html += '</ul>';
		// Display the JSON content.
		$('#content').html(html);
	}
	$(function(){
		$('#productform').on('submit', function(event){
			event.preventDefault();
			$('#content').html('<center>Loading...</center>');
			var entity = 'software'; // Options can be 'music', 'books', 'movies', or 'software'
			var searchterm = $('#search').val(); // For field for input.
			var requrl = 'https://itunes.apple.com/search?';
			var affiliatetoken = '&at=10l3KX&ct=search';
			var fullurl = requrl + '&entity=' + entity + '&term=' + searchterm;
			$.getJSON(fullurl + '&callback=?', function(data) {
				var html = '<ul class="tracks">\n';
				var resultCount = data.resultCount; // Grab the result count
				var productName;
				var authorName;
				var itunesProductUrl;
				var iconSize512;
				var productDescription;
				var productPrice;
				var productVersion;
				var sellerUrl;
				var ipadScreenshotUrls;
				var screenshotUrls;
				var screenshotUrlsCount;
				var ipadScreenshotUrlsCount;
				for (var n = 0; n < resultCount; n++) {
					productName = data.results[n].trackName;
					authorName = data.results[n].artistName;
					itunesProductUrl = data.results[n].trackViewUrl + affiliatetoken;
					sellerUrl = data.results[n].sellerUrl;
					iconSize512 = data.results[n].artworkUrl512;
					productPrice = data.results[n].formattedPrice;
					productVersion = data.results[n].version;
					productDescription = data.results[n].description + '<br /><br /><h4>What\'s new in version ' + productVersion + ':</h4><p> ' + data.results[n].releaseNotes;
					// Find all of the \n and \r in the product description that HTML can't format, and replace them with <br /> tags.
					productDescription = productDescription.replace(/(?:\n)/g, '<br />');
					productDescription = productDescription.replace(/(?:•)/g, '•');
					html += '<li>\n';
					html += '<h2>' + productName + '</h2>';
					html += '<p>By ' + authorName + '</p>';
					html += '<a href="' + itunesProductUrl + '" target="_blank"><img class="icon" src="' + iconSize512 + '" width="175" height="175" alt="Image of ' + productName + '" /></a>';
					html += '<p>Price: ' + productPrice + '</p>';
					if (sellerUrl != null) {
						html += '<a href="' + sellerUrl + '" target="_blank">' + authorName + ' Web Site</a></p>';
					}
					html += '<h3>Description</h3>';
					html += '<p>' + productDescription + '</p>';
					screenshotUrls = data.results[n].screenshotUrls;
					screenshotUrlsCount = screenshotUrls.length;
					for (var i = 0; i < screenshotUrlsCount; i++) {
						console.log('screenshotUrls[' + i + ']: ' + screenshotUrls[i]);
						html += '<img class="screenshots" src="' + screenshotUrls[i] + '" width="320" height="auto" alt="Screenshot ' + [i] + ' of ' + productName + '" />';
					}
					if (ipadScreenshotUrls != null) {
						ipadScreenshotUrls = data.results[n].ipadScreenshotUrls;
						ipadScreenshotUrlsCount = ipadScreenshotUrls.length;
						for (var s = 0; s < ipadScreenshotUrlsCount; s++){
							console.log('ipadScreenshotUrls[' + s + ']: ' + ipadScreenshotUrls[s]);
							html += '<img class="screenshots" src="' + ipadScreenshotUrls[s] + '" width="320" height="auto" alt="Screenshot ' + [s] + ' of ' + productName + '" />';
						}
					}
					html += '</li><hr />';
				}
				htmlOutput(html); // Inject the html output into the htmlOutput function.
			}); // end getJSON()
		});
	});
 })(jQuery);
