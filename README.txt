read me

아들이 새벽에 배고프다해서 간식만드는 사이에 폴더에 있는 파일을 지워놔서 급하게 새로 만들었어요..

<day 1>

handleChange 함수: 각 입력 필드에서 변경된 값을 상태에 업데이트합니다.
handleSubmit 함수: 제출 시 데이터를 콘솔에 출력하고, 필드를 초기화합니다.
styles 객체: 화면 중앙 정렬, 배경색, 여백 등 기본 스타일을 정의했습니다.

<day 2>

App 컴포넌트: 메달 데이터를 관리하며, 새로운 메달 데이터를 추가하는 addMedal 함수와 전체 메달 리스트를 렌더링합니다.
MedalForm 컴포넌트: 사용자 입력을 받아 상위 컴포넌트로 전달하고 입력 필드를 초기화합니다.
MedalList 컴포넌트: 메달 데이터를 금메달 수 기준으로 내림차순 정렬하여 MedalItem 컴포넌트를 반복 출력합니다.
MedalItem 컴포넌트: 각 국가별 메달 정보를 표시하는 단일 항목입니다.

<day 3>

App 컴포넌트: updateMedal과 deleteMedal 함수로 메달 데이터를 수정하고 삭제할 수 있습니다.
MedalForm 컴포넌트: isEditing 상태를 추가하여 추가 모드와 수정 모드를 전환합니다. resetForm 함수로 폼 초기화가 가능합니다.
MedalList 컴포넌트: onDeleteMedal과 onEditMedal을 MedalItem에 전달하여 각 아이템에서 삭제와 수정이 가능하도록 합니다.
MedalItem 컴포넌트: 각 국가별 메달 정보를 보여주며 수정, 삭제 버튼을 제공합니다.