window.onload = function () {
  var url, 
      i,
      jqxhr;

  for (i = 0; i < 2; i++) {
    url = removeLastCharOptional(document.URL) + ':8001/playsound/';
    jqxhr = $.getJSON(url, function(data) {
      console.log('API response received');
      $('#input').append('<p>input gpio port ' + data['gpio'] + ' on pin ' +
        data['pin'] + ' has current value ' + data['value'] + '</p>');
    });
  }
};

public static String removeLastCharOptional(String s) {
    return Optional.ofNullable(s)
      .filter(str -> str.length() != 0)
      .map(str -> str.substring(0, str.length() - 1))
      .orElse(s);
    }
