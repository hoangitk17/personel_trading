const ccxt = require('ccxt');
const log = require('ololog');
require('dotenv').config();

log ('foo', 'bar', 'baz') // foo bar baz
async function main() {
  // Tạo một sàn giao dịch (ví dụ: Binance)
  const exchange = new ccxt.binance();

  try {
    // Lấy thông tin thị trường Bitcoin/USDT
    const symbol = 'BTC/USDT';
    const ticker = await exchange.fetchTicker(symbol);
    log(ticker)

    // In ra giá hiện tại của Bitcoin
    console.log(`Giá hiện tại của ${symbol}: ${ticker.last}`);
  } catch (error) {
    console.error('Lỗi:', error);
  }
}

main();