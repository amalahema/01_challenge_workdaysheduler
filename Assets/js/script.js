//workdayshedule - jquery and day.js
//============================================================================================================
var $newContainer = $('.container-lg.px-5');//class of the div element 


$(document).ready(function () {

  function currentDate() 
  {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D [th]'));
  }

  function checkTime() 
  {
    const startHour = 9;
    const endHour = 19;

    for (let hour = startHour; hour <= endHour; hour++) 
    {
      const targetTime = dayjs().hour(hour);

      const $newTimeBlock = $('<div>').addClass('row time-block').attr('id', `hour-${hour}`).attr('data-hour', hour);//new row added each time when for loop interated,data-hour is being used to store the hour value for each time-block dat-hour have only hour such as 10
      const $hourCol = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hour > 12 ? hour - 12 + ' PM' : hour === 12 ? '12 PM' : hour + ' AM');
      const $descriptionCol = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
      const $saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
      const $icon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

      $saveBtn.append($icon);
      $newTimeBlock.append($hourCol, $descriptionCol, $saveBtn);


      //past, present and future class added
      if (dayjs().isSame(targetTime, 'hour')) 
      {
        $newTimeBlock.addClass('present');//presentclass from css
      } else if (dayjs().isAfter(targetTime)) 
      {
        $newTimeBlock.addClass('past');
        $descriptionCol.attr('disabled', 'disabled');
      } else 
      {
        $newTimeBlock.addClass('future');
      }

      $newContainer.append($newTimeBlock);// Append the time block to the container

   
      //Add a listener for click events on the save button ,save data in local
      //In the event listener, you can use the $(this) selector to get the current button element, and then use the siblings() method to get the textarea element that is a sibling of the button
      $('.saveBtn').on('click', function ()
      {
        const $descriptionCol = $(this).siblings('.description');
        const descriptionText = $descriptionCol.val();
        const hour = $(this).parent().attr('id').split('-')[1];//result:10  //hour-10 split to ['hour', '10'] and selects the second element of the resulting array, which is the hour number. This is achieved by using the split() method to split the string hour-10 into an array based on the - character, and then selecting the second element of the resulting array using [1].                     //extracat the hour number using attr
        console.log(`Saving "${descriptionText}" to local storage for ${hour}`);
        localStorage.setItem(`hour-${hour}`, descriptionText);//string=> hour-10(concatenation) used as a key to store in local   
      });
      // Retrieve saved data from local storage for the corresponding hour
      const savedDescription = localStorage.getItem(`hour-${hour}`);//using key we can get the particular data what we set
      if (savedDescription) 
      {
        $descriptionCol.val(savedDescription);
      }
      else 
      {
        $descriptionCol.val(""); // Clear the textarea if there's no saved data for that hour
      }
    }

  }
  currentDate();
  checkTime();

});










