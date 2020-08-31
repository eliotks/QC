import React, {Component} from 'react';
import '../../index.css';
import P_V_AI from "./P_V_AI";
import P_V_P from "./P_V_P";
import logo from "../../logo.svg";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 0, // 1 = P_V_P, 2 = P_V_AI
            player: 0, // 1 = plays as white, 2 = plays as black
            difficulty: 0
        };
    }

    left_click() {this.setState({mode: 1});}
    right_click() {this.setState({mode: 2});}
    back_click() {this.setState({mode: 0, player: 0, difficulty: 0});}
    white_click() {this.setState({player: 1});}
    black_click() {this.setState({player: 2});}
    easy_click() {this.setState({difficulty: 1});}
    decent_click() {this.setState({difficulty: 3});}
    hard_click() {this.setState({difficulty: 4});}

    render() {
        if (this.state.mode === 1) {
            return (
                <div className="in_game">
                    <div className="header">
                        <button className="back_button" onClick={(i) => this.back_click()}>
                            Tilbake
                        </button>
                    </div>
                    <P_V_P player={1}/>
                </div>
            );
        }
        else if (this.state.mode === 2) {
            if (this.state.player === 0 || this.state.difficulty === 0) {
                if (this.state.player === 0) {
                    return (
                        <div>
                            <div className="header" />
                            <div className="home">
                                <img className="logo" src={logo} alt=""/>
                                <div className="welcome">Vil du spille som hvit eller svart?</div>
                                <div className="welcome_buttons">
                                    <button className="welcome_button" onClick={(i) => this.white_click()}>
                                        Hvit
                                    </button>
                                    <button className="welcome_button" onClick={(i) => this.black_click()}>
                                        Svart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }
                else {
                    return (
                        <div>
                            <div className="header" />
                            <div className="home">
                                <img className="logo" src={logo} alt=""/>
                                <div className="welcome">Hvilken vanskelighetsgrad ønsker du?</div>
                                <div className="welcome_buttons">
                                    <button className="welcome_button" onClick={(i) => this.easy_click()}>
                                        Nybegynner
                                    </button>
                                    <button className="welcome_button" onClick={(i) => this.decent_click()}>
                                        Middels
                                    </button>
                                    <button className="welcome_button" onClick={(i) => this.hard_click()}>
                                        Verdensklasse
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
            else {
                return (
                    <div className="in_game">
                        <div className="header">
                            <button className="back_button" onClick={(i) => this.back_click()}>
                                Tilbake
                            </button>
                        </div>
                        <P_V_AI player={this.state.player} difficulty={this.state.difficulty}/>
                    </div>
                );
            }
        }
        else {
            return (
                <div>
                    <div className="header" />
                    <div className="home">
                        <img className="logo" src={logo} alt=""/>
                        <div className="welcome">Hvem vil du spille mot?</div>
                        <div className="welcome_buttons">
                            <button className="welcome_button" onClick={(i) => this.left_click()}>
                                Spill mot en venn eller mot deg selv
                            </button>
                            <button className="welcome_button" onClick={(i) => this.right_click()}>
                                Spill mot QuarantineChess
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
