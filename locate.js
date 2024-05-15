 document.getElementById("filterBtn").addEventListener("click", function() {
  var filterBox = document.getElementById("filterBox");
  if (filterBox.style.display === "none" || filterBox.style.display === "") {
    filterBox.style.display = "block";
  } else {
    filterBox.style.display = "none";
  }
});
document.getElementById("applyFilterBtn").addEventListener("click", function() {
            document.getElementById("filterBox").style.display = "none";
            showSelectedFilters();
        });

        function showSelectedFilters() {
            var selectedFiltersContainer = document.getElementById("selectedFilters");
            selectedFiltersContainer.innerHTML = "";

            var selectedFilters = [];
            var sortRadios = document.getElementsByName("sort");
            for (var i = 0; i < sortRadios.length; i++) {
                if (sortRadios[i].checked) {
                    selectedFilters.push("Sort By: " + sortRadios[i].nextSibling.nodeValue.trim());
                }
            }

            var typeRadios = document.getElementsByName("type");
            for (var i = 0; i < typeRadios.length; i++) {
                if (typeRadios[i].checked) {
                    selectedFilters.push("Vehicle Type: " + typeRadios[i].nextSibling.nodeValue.trim());
                }
            }

            var partsRadios = document.getElementsByName("parts");
            for (var i = 0; i < partsRadios.length; i++) {
                if (partsRadios[i].checked) {
                    selectedFilters.push("Spare Parts: " + partsRadios[i].nextSibling.nodeValue.trim());
                }
            }

            for (var i = 0; i < selectedFilters.length; i++) {
                var filterElement = document.createElement("span");
                filterElement.textContent = selectedFilters[i];
                filterElement.dataset.index = i;
                filterElement.addEventListener("click", removeFilter);
                selectedFiltersContainer.appendChild(filterElement);
            }
            selectedFiltersContainer.style.display = "block";
        }

        function removeFilter(event) {
            var index = event.target.dataset.index;
            var radios = document.querySelectorAll('input[type="radio"]');
            radios[index].checked = false;
            event.target.remove();
        }