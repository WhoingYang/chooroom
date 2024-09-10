document.addEventListener("DOMContentLoaded", function() {
    // jQuery UI datepicker 적용
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim: 'slideDown',
        changeMonth: true,
        changeYear: true,
        minDate: 0
    });

    // 해시태그 버튼 클릭 이벤트 처리
    document.querySelectorAll('.hashtag').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
    });

    // 객실보기 토글 함수
    function toggleRoomList(button) {
        const roomDetails = button.nextElementSibling;

        // 현재 상태에 따라 표시/숨기기 처리
        if (roomDetails.style.display === "none" || roomDetails.style.display === "") {
            roomDetails.style.display = "block";        // 보이기
            button.textContent = "객실닫기";         // 버튼 텍스트 변경
        } else {
            roomDetails.style.display = "none";         // 숨기기
            button.textContent = "객실보기";            // 버튼 텍스트 변경
        }
    }

    // 객실보기 버튼 클릭 이벤트 처리
    document.querySelectorAll('.toggle-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            toggleRoomList(this);  // 객실보기/숨기기 토글 함수 호출
        });
    });

    // 검색 버튼 클릭 이벤트 처리
    document.querySelector('.search-button').addEventListener('click', function() {
        const checkInDate = document.getElementById('checkin-date').value;
        const checkOutDate = document.getElementById('checkout-date').value;
        const roomCount = document.getElementById('room-count').value;
        const guestCount = document.getElementById('guest-count').value;

        // 입력 값이 모두 있는지 확인 후 알림창으로 표시
        if (checkInDate && checkOutDate && roomCount && guestCount) {
            alert(`Check In: ${checkInDate}, Check Out: ${checkOutDate}, Rooms: ${roomCount}, Guests: ${guestCount}`);
        } else {
            alert('Please fill out all fields.');
        }
    });
});
