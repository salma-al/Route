var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteURL');
var tableData = document.getElementById('tableBody');

var siteDataArr = [];

var localStorageString = localStorage.getItem('bookmarkData');
siteDataArr = JSON.parse(localStorageString) || [];
displayData();

function isValidUrl(url) {
  const urlPattern = new RegExp(
    '^(https?|ftp)://[\\w.-]+(\\.[\\w]+)+([/?#]\\S*)?$'
  );
  return urlPattern.test(url);
}

function submitBookmark() {
  var url = siteUrl.value.trim();
  var nameSite = siteName.value.trim();

  if (!isValidUrl(url) || nameSite.length < 3) {
    //     alert('Invalid !');
    $('#myModal').modal('show');

    siteUrl.style.boxShadow = '0 0 0 .25rem rgba(253, 13, 13, 0.25)';
    siteName.style.boxShadow = '0 0 0 .25rem rgba(253, 13, 13, 0.25)';
    siteName.style.borderColor = '#fe8686';
    siteUrl.style.borderColor = '#fe8686';
    return false;
  }

  siteUrl.style.boxShadow = '';
  siteName.style.boxShadow = '';
  siteName.style.borderColor = '';
  siteUrl.style.borderColor = '';

  var siteData = {
    name: nameSite,
    url: url,
  };

  siteDataArr.push(siteData);
  console.log(siteDataArr);

  localStorage.setItem('bookmarkData', JSON.stringify(siteDataArr));

  displayData();
  eraseData();

  return false;
}

function displayData() {
  var trData = '';

  for (var i = 0; i < siteDataArr.length; i++) {
    trData =
      trData +
      `
          <tr>
               <td>${i + 1}</td>
               <td>${siteDataArr[i].name}</td>
               <td>
                    <a href="${
                      siteDataArr[i].url
                    }" class="btn btn-success" target="_blank">
                    <span><i class="fa-solid fa-eye"></i></span> 
                    Visit
                    </a>
               </td>
               <td>
                    <button class="btn btn-danger" onClick='deleteData(${i})'>
                    <span><i class="fa-solid fa-trash-can"></i></span>
                    Delete
                    </button>
               </td>
          </tr>`;
  }

  tableData.innerHTML = trData;
}

function eraseData() {
  siteName.value = '';
  siteUrl.value = '';
}

function deleteData(rowIndex) {
  //   console.log('its working');

  siteDataArr.splice(rowIndex, 1);

  localStorage.setItem('bookmarkData', JSON.stringify(siteDataArr));

  displayData();
}
