import axios from '#imports';

export default class Materials {
  resp = [];

  async getAllItems(url: number) {
    try {
      const response = await fetch(
        `https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net/vueDevTestTask-getInventoryState?case=${url}`,
      );
      const data = await response.json();

      this.resp = data.inventory;
      navigateTo(`/?case=${url}`);
      return this.resp;
    } catch (error) {}
  }
}

//   async getAllItems(url: number) {
//     const { data } = await axios.get(
//       `https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net/vueDevTestTask-getInventoryState?case=${url}`,
//     );
//     this.response = data.value;
//     console.log(this.response);
//
//   }}
//
