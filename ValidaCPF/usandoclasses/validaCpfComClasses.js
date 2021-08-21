class ValidateCpf {
   constructor(CpfValue) {
      Object.defineProperty(this, 'cpfLimpo', {
         Writable: false,
         Enumerator: true,
         configurable: false,
         Value: CpfValue.replace(/\D+/g, '')
      });
   }

   isSequence() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
   }

   generateNewCpf() {
      const cleanCpf = this.cpfLimpo.slice(0, -2);
      const digit1 = ValidateCpf.generateDigit(cleanCpf);
      const digit2 = ValidateCpf.generateDigit(cleanCpf + digit1);
      this.newCpf = cleanCpf + digit1 + digit2;
   }

   static generateDigit(cleanCpf) {
      let total = 0;
      let reverse = cleanCpf.lenght + 1;
      for (let stringDigit of cleanCpf) {
         total += reverse * Number(stringDigit);
         reverse--;
      }
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
   }

   validate() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.lenght !== 11) return false;
      if (this.isSequence()) return false;
      this.generateNewCpf();

      return this.newCpf === this.cpfLimpo;
   }
}
let validateCpf = new ValidateCpf('121.690.796.02');
if (validateCpf.validate()) {
   console.log('CPF válido.');
} else {
   console.log('CPF inválido.')
}