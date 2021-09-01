export default class countDown {
   constructor(futureDate) {
      this.futureDate = futureDate;
   }

   get _currentDate() {
      return new Date();
   }

   get _futureDate() {
      return new Date(this.futureDate);
   }

   get _tineStampDiff() {
      return this._futureDate.getTime() - this._currentDate.getTime();
   }

   get days() {
      return Math.floor(this._tineStampDiff / (24 * 60 * 60 * 1000))
   }

   get hours() {
      return Math.floor(this._tineStampDiff / (60 * 60 * 1000))
   }

   get minutes() {
      return Math.floor(this._tineStampDiff / (60 * 1000))
   }

   get seconds() {
      return Math.floor(this._tineStampDiff / 1000)
   }

   get total() {
      const days = this.days;
      const hours = this.hours % 24;
      const minutes = this.minutes % 60;
      const seconds = this.seconds % 60;

      return {
         days,
         hours,
         minutes,
         seconds
      }
   }
}