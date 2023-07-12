export default {
    getNumberFormatted(num){
        return Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(num)
    }
}